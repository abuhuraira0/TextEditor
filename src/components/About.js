import {SiGmail, SiLinkedin} from 'react-icons/si'

export default function About(props) {
    let myStyle={
        color: props.mode === 'dark' ? 'white':'#042143',
        backgroundColor: props.mode === 'dark' ? '#042143':'white'
    }
        return (
        <div className='container' style={myStyle}>
            <h1 className='container my-3'>About us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About TextEditor
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is a web app which provides different features like create, change, or edit plain texts.
                    <br />
                </div>
            </div>
            </div>
            <div className="accordion-item"  >
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed"   type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Connect
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex justify-content-around" style={myStyle}>
                    <a style={{fontSize:50}} className="" href="mailto:huraira699@gmail.com"><SiGmail /></a>
                    <a style={{fontSize:50}} className="" href="https://www.linkedin.com/in/abuhuraira0/"><SiLinkedin /></a>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}
