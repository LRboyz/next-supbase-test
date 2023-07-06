export const BR_REG = /^(\n+)/;

const renderer = (rawStr: string) => {
  const length = rawStr.split("\n").length - 1;
  const brList = [];
  for (let i = 0; i < length; i++) {
    brList.push(<br key={i} />);
  }
  return <>{...brList}</>;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "br",
  regexp: BR_REG,
  renderer,
};
