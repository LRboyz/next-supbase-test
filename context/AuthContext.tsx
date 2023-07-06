/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useAuthModal from "@/hooks/useModal";
import { createSupabaseClient } from "@/services/supabase-client";
import { type Session, type User } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import toast from "react-hot-toast";

export type AuthProviderType = {
  user: User | null;
  logout: () => Promise<void>;
};

const defaultProvider: AuthProviderType = {
  user: null,

  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

interface IAuthProvider {
  children: ReactNode;
}
const AuthProvider = ({ children }: IAuthProvider) => {
  /** initial **/
  const [supabase] = useState(() => createSupabaseClient());
  /** State **/
  const [currSession, setCurrSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  /** hooks **/
  const router = useRouter();
  const { onClose } = useAuthModal();

  /** Function **/
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      router.refresh();
      toast.error(error.message);
      console.log(error, "Logout Error!");
    } else {
      setUser(null);
      router.refresh();
      toast.success("退出成功!");
    }
  };

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      // console.log(event, session, "TEST AUTH");
      if (currSession?.access_token !== session?.access_token) {
        setCurrSession(session);
        setUser(session?.user ?? null);
        router.refresh();
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase]);

  const values = {
    user,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
