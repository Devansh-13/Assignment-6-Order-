import Civil from "./civil";

const Packages=()=>{
    return (
        <>
        <div className="packages">
            <div>
                <input type="checkbox" id="pack" name="packages"value="pack1"/>
                <label for="pack">Packages</label>
            </div>

            <label className="rate">Rate <em>(in sqft)</em></label>

            <label className="total">Total</label>
        </div>

        <Civil/>
        </>
    )
}

export default Packages;