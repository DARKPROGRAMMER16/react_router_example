import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const Contact = () => {

    const [searchParam, setSearchParams] = useSearchParams();
    const num = searchParam.get("num");
    const text = searchParam.get("text");

    const num2 = 23
    const text2 = "asdfg"

    const navigate = useNavigate()

  return <>
    <h1>{num}</h1>
    <h1>{text}</h1>

    <button onClick={() => setSearchParams({num:10, text:"qwerty"})}>Change params</button>
    <button onClick={() => navigate(`/about?num=${num2}&text=${text2}`)}>Go to about</button>
  </>;
};

export default Contact;
