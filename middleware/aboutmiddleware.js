const aboutmiddleware = (req , res , next)=>{
    console.log("about middleware");
    next(); 
};

export default aboutmiddleware;