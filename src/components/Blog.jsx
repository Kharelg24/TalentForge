import React from "react";
import "../styles/Blog.css"

function BulletPoints(props) {
    return (
        <div className="keyPoints">
            <li>
                <strong>{props.reference.type}:</strong> {props.reference.decriptions}
            </li>
        </div>
        
    );
}


function Roles(reference) {
    return <BulletPoints reference={reference} />
}

function StakeHolders(){
    return (
        <div className="keyStakeHolder">
            <h5>Key Stakeholder Roles in Benchmarking</h5>
            <p>Different stakeholders within an organization have unique needs and perspectives when
            it comes to benchmarking:</p>
            <ul>
                {stakeholders.map(Roles)}
            </ul>
        </div>
    );
}


function Top(){
    return(
        <div className="upperBlog" >
            <h1 className="title-blog"> The Power of Benchmarking in HR Analytics</h1>
            <img className="talentanalytics" src="/images/talentAnalytics.jpeg" alt="Talent Analytics"/>
            <p>In today's competitive business landscape, organizations are constantly
                seeking ways to imporve their processes, practices, and performance. One powerful tool
                that has emerged in this quest for excellence is benchmarking. By comparing metrics with other
                organizations, benchmarking helps enhance decisionmaking and drives continuous imporvement. While 
                it's often associated with external comparisons, benchmarking can also be conducted internally (SHRM).
            </p>

            <h5>What is Benchmarking?</h5>
            <p>At its core, benchmarking is the porcess of using metrics to compare an organization's performance,
                practices, and processes agaist those of others. This comparison provides valuable insights that can be understanding
                to drive strategic initiatives, such as workforce development, innovative strategies, and even salary adjustments (Meybodi, 2015).
            </p>
        </div>   
    )
}


function ReferenceCard(props){
    return(
        <p>
            {props.reference.text}
        </p>
    );
}

function getReferences(reference){
    return <ReferenceCard reference={reference} />
}

function Bottom(){
    return (
        <div>
            <p>In conclusion, benchmarking is a versatile and powerful tool that can drive significant improvements
                in various aspects of an organization. By learning from similarly situated organzations and continuously assessing
                performance, companies can stay ahead of the curve and foster a culture of excellence. Whether it's through
                strategic, benchmarking provides the insights needed to empower talent and foster authencity in the workplace.
            </p>
            <h5>References:</h5>
            {references.map(getReferences)}
        </div>
       
    );
}




function Blog(){
    return (
        <div className="blog container"> 
            <Top />
            <StakeHolders stakeholders={stakeholders} />
            <Bottom />
        </div>
        
    );
}

const stakeholders = [
    {
        id: 1,
        type: "Executives",
        decriptions: "Senior leaders may want to know how their current recruiting costs compare to those of their competitors. This information can help them make informed decisions about resource allocation and budget planning."
    },
    {
        id: 2,
        type: "Career Managers",
        decriptions: "Ensuring that employees are being compensated fairly is a top priority for career managers. Benchmarking compensation practices against industry standards can help attract and retain top talent."
    },
    {
        id: 3,
        type: "HR Professionals",
        decriptions: "The HR team needs to ensure they are measuring the right metrics. Are they benchmarking the correct measures that truly reflect organizational performance and employee satisfaction?" 
    },
    {
        id: 4,
        type: "Talent Management Team",
        decriptions: "Understanding which skills, degrees, and competencies are in high demand is crucial for the talent management team. Benchmarking can provide insights into the evolving job market and help with strategic workforce planning."
    },
    {
        id: 5,
        type: "Customers",
        decriptions: "Customers are ofeten interested in what sets an organization's products and services apart from the competition. Benchmarking can highlight unique strengths and areas for improvement."
    },
    {
        id: 6,
        type: "Organizational Culture",
        decriptions: "Some stakeholders may want to assess their organization's culture against others. This can provide valuable insights into emploee engagement, satisfaction, and overall organizational health."
    }
]

const references = [
    {
        id: 1,
        text: "Meybodi, M. (2015). The links between just-in-time practices and alignment of benchmarking performance measures. The TQM Journal, 27(1), 108 - 121. SHRM. (n.d.). Benchmarking HR Metrics. Retrieved from, https://www.shrm.org/topics- tools/tools/toolkits/benchmarking-hr-metrics"
    }
]


export default Blog;