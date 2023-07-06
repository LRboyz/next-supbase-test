"use client";

import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useTheme } from "next-themes";

import { Button, Modal, ModalContent, ModalHeader, Input } from "@nextui-org/react";
import { Auth } from "@supabase/auth-ui-react";
import { createSupabaseClient } from "@/services/supabase-client";
import useModal from "@/hooks/useModal";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const AuthModal = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const supabase = createSupabaseClient();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onClose } = useModal();

  // const { onOpen, onOpenChange, onClose, isOpen } = useDisclosure();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  const handleFormSubmit = () => {};
  const handleUsernameInputChanged = () => {};
  const handlePasswordInputChanged = () => {};

  useEffect(() => {
    if (user) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Modal
      className="bg-white dark:bg-zinc-800"
      isOpen={isOpen}
      onOpenChange={onChange}
      onClose={() => {
        onClose();
      }}
      closeButton={
        <Button isIconOnly autoFocus={false} size="sm">
          <X />
        </Button>
      }
      content="sss"
    >
      <ModalContent className="p-4">
        <ModalHeader>✍🏻 INSTANT NOTE </ModalHeader>
        {/* <div className="flex flex-row justify-center items-center w-full h-full ">
          <div className=" max-w-full h-full py-4 flex flex-col justify-start items-center">
            <div className="w-full py-4 grow flex flex-col justify-center items-center">
              <div className="flex flex-col justify-start items-start w-full mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300"> 一个轻量级的自托管备忘录中心。开源且永远免费。</p>
              </div>
              <form className="w-full" onSubmit={handleFormSubmit}>
                <div className={`flex flex-col justify-start items-start w-full ${true && "opacity-80"}`}>
                  <div className="flex flex-col justify-start items-start relative w-full text-base mt-2 py-2">
                    <Input size={"sm"} type="email" label="用户名" />
                  </div>
                  <div className="flex flex-col justify-start items-start relative w-full text-base mt-2 py-2">
                    <Input size={"sm"} type="password" label="密码" />
                  </div>
                </div>
                <div className="flex mt-4 gap-2 justify-end items-center">
                  <Button size="sm">注册</Button>
                  <span className="mr-2 font-mono text-gray-200">/</span>
                  <Button size="sm" color="primary">
                    登录
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        <Auth
          redirectTo="https://knnsuhzdgdcnmdeymbbo.supabase.co/auth/v1/callback"
          supabaseClient={supabase}
          providers={["github"]}
          magicLink={true}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: "#404040",
                  brandAccent: "#08B1A8",
                },
              },
            },
          }}
        />
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
