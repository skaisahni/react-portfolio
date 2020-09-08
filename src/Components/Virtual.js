import React, { Component } from 'react';

class Virtual extends Component {
  render() {
    if (this.props.data) {
      var Virtual = this.props.data.Virtual.map(function (Virtual) {
        var projectImage = 'images/virtual/' + Virtual.image;
        return <div key={Virtual.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={Virtual.url} title={Virtual.title}>
              <img alt={Virtual.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{Virtual.title}</h5>
                  <p>{Virtual.description}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="Virtual">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Virtual Experience</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {Virtual}
            </div>
          </div>
        </div>
      </section>
    );
  }

   
}

export default Virtual;
