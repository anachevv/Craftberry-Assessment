export default function Question() {
    return (
        <>
            <div className="q-container">
                <div className="q-subcontainer">
                    <div className="q-header">
                        <h1 className="raleway-header">What's your hair type or texture?</h1>
                    </div>
                    <div className="options">
                        <form action="#" method="post">
                            <input type="radio" id="straight" name="hair" value="Straight" />
                            <label className="poppins-regular" for="straight">a. Straight</label>
                            
                            <input type="radio" id="curly" name="hair" value="Curly" />
                            <label className="poppins-regular" for="curly">b. Curly</label>

                            <input type="radio" id="wavy" name="hair" value="Wavy" />
                            <label className="poppins-regular" for="wavy">c. Wavy</label>

                            <input type="radio" id="fine" name="hair" value="Fine" />
                            <label className="poppins-regular" for="fine">d. Fine</label>

                            <div className="buttons">
                                <a href="#" className="back-button">Back</a>
                                <button type="submit" className="next-button">Next question →</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="progress-circle">
                    <svg viewBox="0 0 120 120">
                        <circle className="bg" cx="60" cy="60" r="50"></circle>
                        <circle className="progress" cx="600" cy="600" r="50"></circle>
                    </svg>
                    <div className="poppins-regular" id="progress-text">1/5</div>
                </div>

            </div>
        </>
    );
}