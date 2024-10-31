export default function Question1() {
    return (
        <>
            <div className="q-container">
                <div className="q-subcontainer">
                    <div className="q-header">
                        <h1 className="raleway-header">What's your hair type or texture?</h1>
                    </div>
                    <div className="answers">
                        <form action="#" method="post">
                            <input type="text" placeholder="a. Straight" required/>
                            <input type="text" placeholder="b. Curly" required/>
                            <input type="text" placeholder="c. Wavy" required/>
                            <input type="text" placeholder="d. Fine" required/>

                            <div className="btn">
                                <input type="submit" value="Next question ->"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}