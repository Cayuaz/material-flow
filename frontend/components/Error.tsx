type ErrorGetDataProps = {
  msg: string;
};

const ErrorGetData = ({ msg }: ErrorGetDataProps) => {
  return (
    //This component, indicating unavailable products, is rendered when products fail to load.
    <div className=" border-2 border-zinc-800 w-4/5 sm:w-3/5 mx-auto rounded-lg px-4 py-5 shadow hover:border-zinc-700 text-center">
      <h1 className="text-xl text-zinc-400 font-bold">Oops, nothing here!</h1>
      <p className="text-zinc-300 mt-2">{`We couldn't find the ${msg} right now. Please try again later.`}</p>
    </div>
  );
};

export default ErrorGetData;
