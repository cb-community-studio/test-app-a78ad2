import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import client from "../../services/restClient";


const SingleAdvantagePage = (props) => {
    const history = useHistory();
    const urlParams = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        //on mount
        client
            .service("advantage")
            .get(urlParams.singleAdvantageId, { query: { $populate: [] }})
            .then((res) => {
                setData(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Advantage", type: "error", message: error.message || "Failed get advantage" });
            });
    }, []);

    const goBack = () => {
        history.replace("/advantage");
    };
    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Advantage</h3>
                </div>
                <p>advantage/{urlParams.singleAdvantageId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm">Name</label>
                    <p className="m-0" >{data?.name}</p>
                    <label className="text-sm">Address</label>
                    <p className="m-0" >{data?.address}</p>
                    <label className="text-sm">Address</label>
                    <p className="m-0" >{data?.address2}</p>
            
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleAdvantagePage);
