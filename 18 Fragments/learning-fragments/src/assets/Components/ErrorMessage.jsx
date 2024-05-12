const ErrorMessage = ({ llm }) => {
  return <>{llm.length === 0 && <h1>i am hungry</h1>}</>;
};

export default ErrorMessage;
