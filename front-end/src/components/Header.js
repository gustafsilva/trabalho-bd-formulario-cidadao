import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="hero is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            { this.props.titulo }
                        </h1>
                        <h2 className="subtitle">
                            { this.props.subtitulo }
                        </h2>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
