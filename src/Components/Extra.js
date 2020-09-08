import React, { Component } from 'react';

class Extra extends Component {
  render() {
    if (this.props.data) {
      var Certification = this.props.data.Certification.map(function (Certification) {
        var projectImage = 'images/certification/' + Certification.image;
        return <div key={Certification.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={Certification.url} title={Certification.title}>
              <img alt={Certification.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{Certification.title}</h5>
                  <p>{Certification.description}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="Extra">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Certification</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {Certification}
            </div>
          </div>
        </div>
      </section>
    );
  }

   
}

export default Extra;
