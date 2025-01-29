import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Rate() {
    const [goldRate, setGoldRate] = useState(null);
    const [silverRate, setSilverRate] = useState(null);
    const [rateUpdated, setRateUpdated] = useState(null);

    // Fetch rates with Axios
    const fetchRates = async () => {
        try {
            const response = await axios.get('https://jerwishtech.site/v1/api/account/todayrate');
            console.log(response.data);
            if (response.data) {
                setGoldRate(response.data.Rate);
                setSilverRate(response.data.SILVERRATE);
                setRateUpdated(formatDate(new Date()));
            }
            
        } catch (error) {
            console.error('Error fetching rates:', error);
        }
    };

    const formatDate = (date) => {
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
        return formattedDate;
    };

    useEffect(() => {
        fetchRates();
    }, []);

    const cardStyle = {
        width: '12rem',
        minHeight: '50px',
        background: 'linear-gradient(#0F0617, #544646)',
    };

    const cardBodyStyle = {
        padding: '0.1rem',
    };

    const cardTextStyle = {
        fontSize: '0.75rem',
    };

    const cardTextStyle1 = {
        fontSize: '0.65rem',
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 col-6 d-flex justify-content-end mb-2 card-wrapper">
                    <div className="card custom-card" style={cardStyle}>
                        <div className="card-body" style={cardBodyStyle}>
                            <p className="card-text" style={cardTextStyle}>Gold Rate</p>
                            <p className="card-text" style={cardTextStyle1}>
                                {goldRate !== null ? `₹ ${goldRate}` : 'Loading...'}
                            </p>
                            <p className="card-text" style={cardTextStyle1}>22KT per gram</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-6 d-flex justify-content-center mb-4 card-wrapper">
                    <div className="card custom-card" style={cardStyle}>
                        <div className="card-body" style={cardBodyStyle}>
                            <p className="card-text" style={cardTextStyle}>Silver Rate</p>
                            <p className="card-text" style={cardTextStyle1}>
                                {silverRate !== null ? `₹ ${silverRate}` : 'Loading...'}
                            </p>
                            <p className="card-text" style={cardTextStyle1}>per gram</p>
                        </div>
                    </div>
                </div>
            </div>
            {rateUpdated && (
                <div className="text-center mt-3">
                    <p style={{ fontSize: '0.7rem' }}>Rates updated on: {rateUpdated}</p>
                </div>
            )}
        </div>
    );
}
