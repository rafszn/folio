import { miyagi } from "ldrs";
miyagi.register();

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <l-miyagi size="40" stroke="3.5" speed="0.9" color="black"></l-miyagi>
    </div>
  );
};
export default Loader;
