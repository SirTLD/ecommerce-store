import { useLocation } from 'react-router';

const Success = () => {
  const location = useLocation();
  return (
    <>
      <div>Successfully purchased items!</div>
    </>
  );
};

export default Success;
