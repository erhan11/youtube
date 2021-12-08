import "./intro.css"
const Intro = () => {
    return (
        <div className="i">
            <div className="i-left"></div>
                <div className="i-left-wrapper"></div>
                    <h2>Hello my name is</h2>
                    <h1 className="i-name">Erhan</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Photographer</div>
                        <div className="i-title-item">Writer</div>
                        <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>

            <div className="i-right"></div>

        </div>
    )
}

export default Intro
