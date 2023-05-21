import { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

const Form = () => {

    const [page, setPage] = useState(0);
    const FormTitles = ['Sign Up', 'Personal Info', 'Other Info'];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo/>
        }
        else if (page === 1) {
            return <PersonalInfo/>
        }
        else {
            return <OtherInfo/>
        }
    }
    return ( 
        <div>
            <div className="progress-bar"><div style={{width: page === 0 ? '33.33%' : page === 1 ? '66.66%' : '100%'}}></div></div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">
                    {PageDisplay()}
                </div>
                <div className="footer">
                    <button 
                    disabled = {page === 0 }
                    onClick={()=>{if(page > 0){setPage((currentPage)=> currentPage-1)} else {setPage(page)}}}>Prev</button>
                    <button 
                    disabled = {page === FormTitles.length - 1}
                    onClick={()=>{setPage((currentPage)=> currentPage + 1)}}>Next</button>
                </div>
            </div>
        </div>
    );
}
 
export default Form;