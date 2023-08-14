import { AiOutlineTwitter, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="grid mx-48  py-12 border-t border-slate-200">

        <div className="flex justify-between">
            <p className="text-[20px] text-gray-500">Alwin John @2023</p>
            
            <nav className="text-gray-500 flex space-x-4"> 
                <a href='https://twitter.com/_alwin_john' target='_blank' rel="noreferrer"><AiOutlineTwitter size='1.5em'/></a>
                <a href='https://github.com/Dexters-Hub' target='_blank' rel="noreferrer"><AiOutlineGithub size='1.5em' /></a>
                <a href='https://www.linkedin.com/in/alwinjohn/' target='_blank' rel="noreferrer"><AiFillLinkedin size='1.5em' /></a>
            </nav>
        </div>
        

    </footer>
  );
};

export default Footer;