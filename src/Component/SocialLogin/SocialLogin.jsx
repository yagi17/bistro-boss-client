import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      // console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name:res.user?.displayName,
      }
      axiosPublic.post('/users', userInfo)
      .then(res =>{
        // console.log(res.data);
        navigate('/')
      })
    });
  };

  return (
    <div className="px-8 div">
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle />
          Google
        </button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default SocialLogin;
