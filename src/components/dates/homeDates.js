import React, { Component } from "react";
import "./dates.css";
import {eventDataPacket} from "../../dataPackets/dates"

const eventIteration = eventDataPacket.map((event, index) =>
  <li key={index}>
    <div>
      <p class="date-event">{event.dateDay} <span>{event.dateMonYear}</span></p>
      <p class="name">
        {event.lineup.map((artist, artistIndex) =>
        <span key={artistIndex}>{artist}</span>
        )}
      </p>
      <p class="venue">
        venue
        <span>{event.venue}</span>
        <span>{event.venueLocation}</span>
      </p>
{/*       <p class="price">
        tickets
        <span>${event.ticketPrice}</span>
      </p>
      <p class="buy">
        <a href={event.ticketLink} class="btn square icon"><i class="fa fa-ticket"></i> buy ticket</a>
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
            <div className="row eventsRow upcomming-events-list inverse-color">
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