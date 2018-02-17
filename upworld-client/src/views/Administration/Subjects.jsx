import React, { Component } from 'react';
import Administration from 'views/Administration.jsx';

class Subjects extends Administration{
    constructor(props) {
    	super(props);
    	this.state.entityName='Subject';
    	this.state.apiRoute='/courses';
	    this.state.tableDisplayProps=[
		    {
		    	propName: 'name',
			    inputType: 'string'
		    }
	    ];
    }
}

export default Subjects;
