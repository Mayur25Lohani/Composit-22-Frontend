import classes from "./Sponsor.module.css";
import Button from "../UI/Button";
import apple from "./img/apple.png";
import facebook from "./img/facebook.png";
import nokia from "./img/nokia.png";
import oracle from "./img/oracle.png";

const Sponsor = () => {
    return (
        <div className={classes["sponsor"]}>
            <h1 className={classes["sponsor-heading"]}>Our Sponsors</h1>
            <div className={classes["sponsor-group"]}>
                <img src={apple} alt="Apple" className={classes["sponsor-logo"]} />
                <img src={facebook} alt="Facebook" className={classes["sponsor-logo"]} />
                <img src={nokia} alt="Nokia" className={classes["sponsor-logo"]} />
                <img src={oracle} alt="Oracle" className={classes["sponsor-logo"]} />
            </div>
            <Button className={classes["btn-sponsor"]}>Become a Sponsor</Button>
        </div>
    );
};

export default Sponsor;