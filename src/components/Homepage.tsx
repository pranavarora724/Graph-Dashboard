'use client';

import { useState } from "react";
import Hamburger from "./Hamburger";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import SkillSet from "./skillSet/SkillSet";
import UpdateModal from "./modals/UpdateModal";

function Home()
{
    const[isOpen  , setIsOpen] = useState(false);
    const[rank , setRank] = useState(5);
    const[percentile , setPercentile] = useState(90);
    const[score , setScore] = useState(11);

    return(
    <div className="relative">
        <Navbar></Navbar>

        <div className="flex flex-row">

            <Sidebar></Sidebar>

            <SkillSet percentile={percentile} rank={rank} score={score} setIsOpen={setIsOpen}></SkillSet>

        </div>

        <Hamburger></Hamburger>

        <UpdateModal
        rank={rank}
        score={score}
        percentile={percentile}
        isOpen={isOpen}

        setRank={setRank}
        setIsOpen={setIsOpen}
        setPercentile={setPercentile}
        setScore={setScore}
        ></UpdateModal>
    </div>
    )
}

export default Home;