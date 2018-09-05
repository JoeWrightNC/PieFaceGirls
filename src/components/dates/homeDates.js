import React, { Component } from "react";
import "./dates.css";
import {eventDataPacket} from "../../dataPackets/dates"

const eventIteration = eventDataPacket.map((event, index) =>
  <li key={index}>
    <div>
      <p className="date-event">{event.dateDay} <span>{event.dateMonYear}</span></p>
      <p className="name">
        {event.lineup.map((artist, artistIndex) =>
        <span key={artistIndex}>{artist}</span>
        )}
      </p>
      <p className="venue">
        venue
        <span>{event.venue}</span>
        <span>{event.venueLocation}</span>
      </p>
{/*       <p className="price">
        tickets
        <span>${event.ticketPrice}</span>
      </p>
      <p className="buy">
        <a href={event.ticketLink} className="btn square icon"><i className="fa fa-ticket"></i> buy ticket</a>
      </p> */}
    </div>
  </li>
);

export class HomeDates extends Component {
    state = {
    };

    componentWillMount() {

    }

    render() {
        return (
            <div className="row eventsRow upcomming-events-list">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <h4 className="upcomming-events-list-title montserrat extra-bold">upcoming events</h4>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-12">
                <ul>
                  {eventIteration}
                </ul>
              </div>
            </div>
        );
    }
}