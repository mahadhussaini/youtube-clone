import React from "react";
import "./Videos.css";
import Filter from "./Filter";
import SingleVideo from "./SingleVideo";

function Videos() {
  return (
    <div className="videos">
      <Filter />
      <div className="row">
        <SingleVideo
          thumb_img="https://i.ytimg.com/vi/78uSkHH42IU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSUsgncPb84K_zEOdU_VzC1bkfjA"
          profile_img="https://yt3.ggpht.com/ytc/AMLnZu9vk_jSZZqpKOw6TohZDkc4e2ekKVYPlcioQjttfQ=s176-c-k-c0x00ffffff-no-rj-mo"
          title="React Full Course 2023"
          channel_name="Simplilearn"
          video_duration="5:33:29"
        />
        <SingleVideo
          thumb_img="https://www.techsmith.com/blog/wp-content/uploads/2021/02/TSC-thumbnail-example-1024x576.png"
          profile_img="https://plus.unsplash.com/premium_photo-1666900440561-94dcb6865554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fHww"
          title="React Full Course 2023"
          channel_name="MindMeldEducation"
          video_duration="4:34:30"
        />
        <SingleVideo
          thumb_img="https://qph.cf2.quoracdn.net/main-qimg-05ff19270e28e22a2059384d875a6e9a-lq"
          profile_img="https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww"
          title="React Full Course 2023"
          channel_name="Shortcuts"
          video_duration="3:35:31"
        />
        <SingleVideo
          thumb_img="https://lh3.googleusercontent.com/l7MazTxZXQzZ3DcTjIsQKGpu_IBF76o0I6gE6ESLoXAtaT8E2GhPUmd4O9FBQXc4Gu-fx-bP_YY6nVu-regqj3DmoQ=w640-h400-e365-rj-sc0x00ffffff"
          profile_img="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww"
          title="React Full Course 2023"
          channel_name="LearnWithMe"
          video_duration="32:36:32"
        />
        <SingleVideo
          thumb_img="https://dl-asset.cyberlink.com/web/prog/learning-center/html/9147/PDR19-YouTube-488_How_To_Youtube_Thumbnails_App/img/youtube-thumbnails.jpg"
          profile_img="https://plus.unsplash.com/premium_photo-1664392248318-4e1d9361726e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tfGVufDB8fDB8fHww"
          title="React Full Course 2023"
          channel_name="BrainWaveAcademy"
          video_duration="1:37:33"
        />
        <SingleVideo
          thumb_img="https://qph.cf2.quoracdn.net/main-qimg-f646e4f0ea405959ca2a2cba6c801c6f-lq"
          profile_img="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fHww"
          title="React Full Course 2023"
          channel_name="ThinkTankTutor"
          video_duration="0:38:34"
        />
        <SingleVideo
          thumb_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6DNWwq1uKkjHiGGrq5FkniDllZmN3C880Q&usqp=CAU"
          profile_img="https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww"
          title="React Full Course 2023"
          channel_name="CuriousCrafter"
          video_duration="5:39:35"
        />
        <SingleVideo
          thumb_img="https://lh3.googleusercontent.com/TRLGuL33AkR6pmtuwJhKh2NVBvQw-Xl8uV3htkZHB_2N1VFTbH_oNP16vk0gWWxGtuGv-sr4bmn9rqJ0vEWfI5aaAg=w640-h400-e365-rj-sc0x00ffffff"
          profile_img="https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fHww"
          title="React Full Course 2023"
          channel_name="StudySavvyChannel"
          video_duration="4:40:36"
        />
        <SingleVideo
          thumb_img="https://www.adobe.com/express/learn/blog/media_1dea902d66828518f59dbdfda3fa9a268e8d0748c.png?width=1200&format=pjpg&optimize=medium"
          profile_img="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww"
          title="React Full Course 2023"
          channel_name="WisdomWizardYT"
          video_duration="3:41:37"
        />
        <SingleVideo
          thumb_img="https://i.pinimg.com/736x/67/f0/1c/67f01c103cd221ca500161f8b85f79cc.jpg"
          profile_img="https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
          title="React Full Course 2023"
          channel_name="TheLearnedLearner"
          video_duration="2:42:38"
        />
        <SingleVideo
          thumb_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepX6drUyN2_Xk1luQurKeSJ6O4Wih2GSbVCZM-oico7X8zXWVadpl-UXc4w7eVzBYyvc&usqp=CAU"
          profile_img="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D"
          title="React Full Course 2023"
          channel_name="IntellectInMotion"
          video_duration="1:43:39"
        />
        <SingleVideo
          thumb_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4EY1zyyyk1haL-L4fxCGWmGi7HDq1IBn2g&usqp=CAU"
          profile_img="https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww"
          title="React Full Course 2023"
          channel_name="AcademicAlchemyYT"
          video_duration="0:44:40"
        />
      </div>
    </div>
  );
}
export default Videos;
