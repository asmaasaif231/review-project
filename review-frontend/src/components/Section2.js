function  Section2(props){
    return (
        <div className="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
           <h2>{props.CName}</h2>
            <h4>{props.Cdescription}</h4>
            <h3>{props.Cduration}</h3>
            <h5>{props.CstartDate}</h5>
            <h5>{props.CendDate}</h5>
            <h5>{props.Clocation}</h5>
            <h5>{props.Clevel}</h5>

        </div>
    
        );
    }
    
export default Section2;
    