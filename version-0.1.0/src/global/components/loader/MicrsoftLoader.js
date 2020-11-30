import React from 'react';
import './loader.scss';

export default function MicrosoftLoader(props){
    return (
      <div className="w-100 d-flex justify-content-center abs">
        <div>
          <div className="loader"> Loading...</div>
        </div>
      </div>
    );
}