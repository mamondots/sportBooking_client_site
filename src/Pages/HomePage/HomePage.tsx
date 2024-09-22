import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";
import FeaturedFacilities from "../FeaturedFacilities/FeaturedFacilities";
import HowWorks from "../HowWorks/HowWorks";
import JoinClub from "../JoinClub/JoinClub";
import JoinClud from "../JoinClud/JoinClud";
import Prize from "../PrizePage/Prize/Prize";
import Team from "../Team/Team";
import Testimonal from "../Testimonal/Testimonal";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedFacilities></FeaturedFacilities>
      <HowWorks></HowWorks>
      <JoinClub></JoinClub>
      <Prize></Prize>
      <Blogs></Blogs>
      <Team></Team>
      <Testimonal></Testimonal>
      <JoinClud></JoinClud>
    </div>
  );
};

export default HomePage;
