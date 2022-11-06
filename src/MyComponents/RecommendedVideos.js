import React from "react";
import "../RecommendedVideos.css";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

export default function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos_videos">
        <div className="heading">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
              alt="YTlogo"
              height={"25px"}
            />
          </Link>
          <Avatar
            alt="AJ"
            src="https://media-exp1.licdn.com/dms/image/C5603AQG-OcAZC-Apsw/profile-displayphoto-shrink_200_200/0/1641126144836?e=1647475200&v=beta&t=DyJbJECidtlksir3QdQMH6z_sUUk691u_4Ya9JHWoJU"
          />
        </div>
        <VideoCard
          title="| Basics of C (Part 1) | C-Programming - By W.INTELLI |"
          views="2.3M Views"
          timestamp="3 dats ago"
          channelImage="images/1.webp"
          channel="W.INTELLI"
          image="images/1.webp"
        />{" "}
        <VideoCard
          title="How I Trained Myself to Wake Up at 4:45am EASILY!"
          views="2.3M Views"
          timestamp="3 dats ago"
          channelImage="images/2.webp"
          channel="W.INTELLI"
          image="images/2.webp"
        />{" "}
        <VideoCard
          title="Option Chain Secret Trading Strategy | Regular Income from Stock Market"
          views="2.3M Views"
          timestamp="3 dats ago"
          channelImage="images/3.webp"
          channel="W.INTELLI"
          image="images/3.webp"
        />{" "}
        <VideoCard
          title="Option Chain Secret Trading Strategy | Regular Income from Stock Market"
          views="2.3M Views"
          timestamp="3 dats ago"
          channelImage="images/4.webp"
          channel="W.INTELLI"
          image="images/4.webp"
        />{" "}
        <VideoCard
          title="| Basics of C (Part 1) | C-Programming - By W.INTELLI |"
          views="2.3M Views"
          timestamp="3 dats ago"
          channelImage="images/5.webp"
          channel="W.INTELLI"
          image="images/5.webp"
        />{" "}
        <VideoCard
          title="How I Trained Myself to Wake Up at 4:45am EASILY!"
          views="2.3M Views"
          timestamp="3 dats ago"
          channelImage="images/6.webp"
          channel="W.INTELLI"
          image="images/6.webp"
        />{" "}
        <VideoCard
          title="Option Chain Secret Trading Strategy | Regular Income from Stock Market"
          views="2.3M Views"
          timestamp="3 dats ago"
          channelImage="images/7.webp"
          channel="W.INTELLI"
          image="images/7.webp"
        />{" "}
        <VideoCard
          title="Option Chain Secret Trading Strategy | Regular Income from Stock Market"
          views="2.3M Views"
          timestamp="3 dats ago"
          channelImage="images/8.webp"
          channel="W.INTELLI"
          image="images/8.webp"
        />{" "}
      </div>
    </div>
  );
}
