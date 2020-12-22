import React, {useEffect} from 'react'
import Skill from './Skill';
import AOS from 'aos';
export interface SkillsProps {
    
}
 
const Skills: React.FunctionComponent<SkillsProps> = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return ( 
        <div className="container skills" data-aos="fade-right">
            <h2 className="about-title">
                        Skills
            </h2>
            <div className="row">
                <div className="col-lg-6">
                    <Skill
                        name="HTML &amp; CSS"
                        percent="90"
                    />
                    <Skill
                        name="SQL &amp; MongoDb"
                        percent="50"
                    />
                    <Skill
                        name="JAVASCRIPT"
                        percent="90"
                    />
                    <Skill
                        name="REACT"
                        percent="88"
                    />
                </div>

                <div className="col-lg-6">
                    <Skill
                            name="DOCKER"
                            percent="60"
                        />
                    <Skill
                        name="TYPESCRIPT"
                        percent="70"
                    />
                    <Skill
                        name="BASH"
                        percent="75"
                    />
                    <Skill
                        name="NODEJS"
                        percent="70"
                    />
                </div>
                
            </div>
        </div>
     
     );
}
 
export default Skills;