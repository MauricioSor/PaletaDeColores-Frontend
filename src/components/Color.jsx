import React, { useState } from 'react';
import { Container } from "react-bootstrap";

const Color = ({color}) => {

    return (
        <Container>
        <div className="border text-center" style={{ backgroundColor: color, width: '120px', height: '120px' }}></div>
        </Container>
    );
};

export default Color;