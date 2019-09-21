import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
export default function Icon({ type, name, onClick }) {
	return <i className={`${type} ${name}`} onClick={onClick} />;
}
