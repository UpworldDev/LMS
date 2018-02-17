import React, { Component } from 'react';
import Administration from 'views/Administration.jsx';

class Terms extends Administration{
    constructor(props) {
    	super(props);
    	this.state.entityName='Term';
    	this.state.apiRoute='/terms';
	    this.state.tableDisplayProps=[
		    {
			    propName: 'name',
			    inputType: 'string'
		    },
		    {
			    propName: 'startDate',
			    inputType: 'date'
		    },
		    {
			    propName: 'endDate',
			    inputType: 'date'
		    }
	    ];
    }
}

export default Terms;
