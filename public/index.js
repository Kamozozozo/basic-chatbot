
const currentTime = new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
let time= currentTime
const textinput =document.getElementById("input-field");
const chatContainer = document.getElementById("conversation");
//create user message 

const   database = {
    //top level
    select: {
        title: ["Mmmh Im not sure if i understand your question please lets  try a different aproach \n Please select."],
        options: ["Registration", "Housing", "Finance", "Recreation", "AcademicIssues", "Security","Rules"]
    },
    //second level
    Registration: {
        title: "Please select category",
        options: ["Documents", "Accept Offer","steps for registration"]
    },
     //Registration Children
    stepsForRegistration:{
      title: "The following shows how to register Online",
      options:["1 :The Applicant must Insert Student Number and Requestion Pin",
              "2 :Once recieveed pin,Insert the pin and log in",
              "3 :The menu Allows the applicant to access the web online by clicking on Registration",
            " 4 :The applicant must click and Accept The Rules and the Code Of Conduct to proceed with thier registration",
              "5 :by clicking thr return Button the Applicant is now able to proceed with registration",
            "5 :the next step requires to click on your employment Status"]
    },
    AcceptOffer:{
      title:"to accept offer you must have the following",
      options:["1.You need a Certified Matric Statement","2.You are going to need proof of resident","3. you must have a certified copy Identity Card","4. firm offer letter(optional)","5. Proof of registratioin fee deposit"]
    },
    Documents: {
      title: "below are the type of documents required for regiistration",
      options: ["1.You need a Certified Matric Statement","2.You are going to need proof of resident","3. you must have a certified copy Identity Card"]
  },
  //housing
    Housing: {
        title: "Please select category",
        options: ["Specific Documents","Location"]
    },//housing children
    Location:{
      title:"Location",
      options:["If you have reached an awaiting outcome,that means your Residence application was successful,then you can  go to LT-3 to meet with the student housing staff and sign up for a room"]
    },
    SpecificDocuments:{
      title:"the type of document Required For Residence",
      options:["1 :proof Of Registration","2 :Proof of reisidence(optional)"]
    },
    //finance
    Finance: {
        title: "Please select category",
        options: ["Nsfas bursary", "Ezaga", "bursary"]
    },
    //finance children
    NsfasBursary :{
      title:"To get help with Nsfas go to thier Official website ,contact them and through their Social media Accounts",
      options:["website","Contact: 0800 067 327","Twitter","Facebook","back"]
    },
    Ezaga:{
      title:"to get help with ezaga you can contact ezaga,through their whatsap Customer Support and their Social Media Accounts ",
      options:["website","Twitter","Facebook","Whatsapp :073 264 7807","Phone Contact :086 999 0927","back"]
    },
    bursary:{
      title:"bursaries that are available",
      options:["NRF","Fundi","Funza Lushaka","SETA"]
  
    },
    Recreation: {
        title: "Please select the type of sports",
        options: ["Indoor", "Outdoor"]
    },
    //recreation children
    Indoor:{
      title:"This are the indoor activities please select the sports of interest to you",
      options:["Chess","Waltz dancing","singing","Gym","Snooker","squash","Taekwondo","boxing"]
    },
    Outdoor:{
      title:"This are the outdoor activities please select the sports of interest to you",
      options:["⚽Football","🏉Rugby","🏀Netball","🏐Volley Ball"," Table tennis","Swimming"]
    },
    //academicIsues
    AcademicIssues: {
        title: " what  academic Issues do you have Please select category",
        options: ["Enrollment","Access Moodle"]
    },
    //academicIssues Children
    Enrollment:{
  
      title:"to enroll you can do the following",
      options:["to Enroll on a Module you can Contact your Lecture for that Specific module ","Another option is to Go to the Admin to enroll in a module "]
    },
    AccessMoodle:{
      title:"to access moodle Follow the following steps",
      options:["1 :To login to Moodle Unizulu,got to  official website https://learn.unizulu.ac.za/",
      "2 :If you are Studying Education ,select 'Unizulu Moodle  Faculty of Education'",
      "3 : You will see the 'Unizulu Moodle Education Login' page",
      "4 :Enter your Username and Password and then Click 'Login'" ]   
    },
    //security parent
    Security: {
        title: "Safety and Security",
        options: ["Emergency Services"]
    },
    //security parent child
    EmergencyServices:{
      title:"The Emergency services that are provided by the University of Zululand are as follows.",
      options:["Safety and security is the primary responsibilty of the PSD(protective Service Department \n Kwadlangezwa:035 902 6599 \n Richards Bay Campus:035 902 6970.",
             ,"There  is guarding Service and patrol on campus for residence and Area Around campus Available 24/7.",
            "The Campus Clinic is Accessible to all Students and Provide good Health  Care Services for  Students within the University.",
          "Mobile chase app is an Emergency Service app that provides security services to Off Campus Students."]
    },
    //rules
    Rules :{
      title:"please select the rules you want",
      options:["Exam Rules","Residence Rules","change programs"]
    },//rules children
    ExamRules:{
      title:"the following are the rules that must be followed by every student who will be writing exams",
      options:["1.Students are obliged to identify themselves positively by means of a valid student card when writing a test or examination No access to the test or examination venue will be allowed without a valid student card"
      , "2. No person may pretend to be a registered student and/or write a test or examination on behalf of a student." ,
      "3.  No student may enter the test or examination venue later than half an hour after the commencement of a test or examination session",
      "4 No student may leave the test or examination venue earlier than half an hour after the commencement of a test or examination session." ,
      " 5.  Students must obey all the instructions given by an invigilator immediately and strictly" ,
      "6.  Students may not bring into the test or examination venue or have in their possession any of the following:  bags (satchels) handbags pencil cases or bags unauthorized apparatus books electronic means of communication or similar devices cellular phone watches (smartwatches) or cellular phones (cellular phones  may not be used as a substitute for calculators) any piece of paper, no matter how small notes of any nature whatsoever."
      ,"This Post was Protected by SouthAfricaPortal, All Rights Reserved"]
    },
    ResidenceRules:{
      title:"students who want to resides in the instution Accomodation must Know this rules",
      options:["1. To apply for residence does not guarantee you any space in residence. The balancing acts between the set criteria and the availability of spaces will be made"
      ,"2. Successful application for residence will be dependent on meeting, but not limited to the following conditions:",
      , " 2.1 Must be registered academically as a full-timestudent",
       ,"2.2 Must be registered for at least four modules in the year for which accommodation is applied(undergraduate students) Masters and PhD students should comply with their programme duration",
      " 2.3 Must (a) be on track to complete a three-year academic programme in four years; or a four-year programme in five years and (b) not have been at the University of Zululand (whether in residence or not)for more than five years",
      "2.4 The applications for residences will be considered on the campus where the applicants’ academic program is offered",
      "2.5 Students must not have disciplinary record  against their names",
      "2.6 Students must not have a note of unbecoming  against them as well" ,
      "2.7 Students must claim their Student Housing confirmed spaces during the official date of academic registration; and ",
       "2.8 A student who applied for residence cannot transfer that residence to the other student"]
    },changePrograms:{
      title:"to change programs note that",
      options:["1.  student may change registration from one programme to another after the first or  second year of study only, provided that he or she meets the entry requirements for the second programme and provided further that enrolment targets have not been exceeded",
                "Any change in registration must be completed within the registration period.",
                "for more information acess the school chalander here---->"]
    },
    //more information
    hello:{
      title:"hello",
      options:["Hello! How can I assist you today?"]
    },
    hi:{
      title:"hello",
      options:["Hello! How can I assist you today?"]
    },
    hey:{
      title:"hello",
      options:["Hello! How can I assist you today?"]
    },
    thank:{
      title:"thanks",
      options:["No problem, I'm always here to help you."]
    },
    yourname:{
      title:"bot name",
      options:["My name is Unibot. I'm a chatbot here to assist first-year students."]
    },
    bookSeminar:{
      title:"Seminar book",
      options:["to book a seminar do the following", "1 : log in the university library website library.unizulu.ac.za", "2 : click seminar room and check for available space" 
      , "3 : First select a start time from the grid below. You will then be able to modify the end date/time in the dropdown below the grid.", "4. Enter your student  number and and fill in the details asked"
      , "4 : You will then be given an email that will expire after 15 minutes, this email is for conformation of your bookings"
      ,"5 : Users will receive a comfirmation email upon making their booking, this email, together with a valid UNIZULU identity card must be produced at the Short loan before a key is provided. A seminar room key will not be issued without the comfirmation email and valid UNIZULU identity card",
      "6 :The card will be kept for the duration of the period that the key is held by the user. Only when the student returns the key, will the card be returned to the student"
      , " 7 :Users  may only book a seminar room for 2 hours per day in this category."]
    },
    sawbona:{
      title:"greeting",
      options:["Ngiyaphila. Wena unjani?"]
    },
    howareyou:{
      title:"how are u?",
      options:["I am fine, thank you for asking!"]
  
    },
    goodbye:{
      title: "goodbye",
      options : ["Good bye and see you later!"]
    },
    help:{
      title:"help",
      options:["If you need any assistance or if you have any questions, please don't hesitate to ask me. I am here to help"]
  
    },
    presidentsrc:{
      title:'SRC',
      options:["Yaya Khumalo is the src president for 2023 ,\n he is in SASCO  political party, he helps with Issues that student  can or face ,they can inform the src to try resolve their issues and provide feed back to students "]
    },
    faculties:{
      title:'faculties',
      options:["Faculty oF Science And Agriculture",
      "Faculty of Education",
      "Faculty of Humanities and social sciences",
      "Faculty of Art",
      "Faculty of Commerce, Administraction & Law"]
    },
    Deanfaculties:{
      title: 'Deanfaculties',
      options:["Faculty oF Science And Agriculture Dean is Prof KC Lehloenya, email is LehloenyaK@unizulu.ac.za",
      "Faculty of Education Dean is Prof SS Ntombela, email is NtombelaS@unizulu.ac.za",
      "Faculty of Humanities and social sciences Dean is Prof MA Masonga, email is MasongaM@unizulu.ac.za",
      "Faculty of Art Dean is Prof Masonga, email is MasongaM@unizlu.ac.za",
      "Faculty of Commerce, Administation & law Dean is Prof L Greyling, email is Greyling@unizulu.ac.za"]
    },
    Library:{
      title:"Library",
      options:["Students can get help with accesessing UNIZULU electronic Resources by going to  https://library.unizulu.ac.za page or \ncontact is 035-902-6463 to get more information about Unizulu library"]
    },
    Directions:{
      title:"Directions",
      options:["from main gate go straight along the road then on your left they is a hall name is BHEKUZULU HaLL", "On the right they are ATM machines for transctions", " when continue straight they is a buildnging called ADMIN when they help students with Academical issues and finance", "Lecture halls close to Admin are NEs and B-Lab", "Library is a big tall building is located close with B-Lab and behind the Library the is H-Lab",
      "on the left we have E lecture halls and on the right they is HP-Lab", "behind H-Lab they is SC lrcturer Hall buildings",
      "Zoology and D block" ]
    },
    clarify:{
      title:"clarifications",
      options:"what do you want me to clarify on?"
    },
    bookaroomresidence:{
      title :"book room",
      options:["1 :Pay your full tuition fees if you have any","2 : You must have a student number and a pin ","3 :Registered Academically ","4 :log on to UNIZULU its Enable 'https://jasper.unizulu.ac.za/pls/prodi41/w99pkg.mi_login'"
      ," 5 :Click on residence application",
      "6 :Go through  the residence Rules and Regulations",
      "7 : Submit Residence application",
      "8 :Residence Period",
      "9 :from a list of residence . click on a building of your choice",
      "10 :Click on proceed to complete aplication",
       "11 :Admission Status -awaiting outcome"]
    },
    whenregister:{
      title:"when to register",
      options:["Between 30 Jan to 5 February "]
    },
    conditionaloffer:{
      title:"What does conditional offer mean",
      options:["It means you partially meet the requirements, subject to your final matriculation results"]
    },
    campustoregister:{
      title:"Must i come to campus to register",
      options:["No"]
    },
    requirementsnotaccepted:{
      title:"i met all Requirements but not accepted",
      options:["Spaces are limited, the programme was full"]
    },
    changemymind:{
      title:"change of mind",
      options:["you can change Through Cao"]
    },
    lectureStartbegin:{
      title:"when are lecture begining",
      options:["second week of february"]
    },
    submitdocumentsendonline:{
      title:"do I need to submit my sumbittion form?",
      options:["you submit Online An email address will be provided for you to send your documents during the registration "]
    }

}
///menu based generator
function menuBaseGenerate(){
///traverse though the data this could have been done better using resursion to imporve the complexity
const optiondiv=document.createElement("div");
const {select:{options}} =database
const{select:{title}}=database
BotMessage(title)
options.forEach(i => {
  var options=document.createElement("div")
  options.className="select-option"
  options.textContent=i;
  optiondiv.appendChild(options)
  options.addEventListener("click",()=>{
    if (options.textContent == "Registration") {
      optiondiv.remove()
      const {Registration:{title}}=database
      const {Registration:{options}}=database
      const optionDiv =document.createElement("div");
      options.forEach(i => {
        var options=document.createElement("div")
        options.className="select-option"
        options.textContent=i;
        optionDiv.appendChild(options)
        options.addEventListener("click",()=>{
          if(options.textContent == "Documents"){
            optionDiv.remove()
            const {Documents:{title}}=database
            const {Documents:{options}}=database
            const optiondiv =document.createElement("div");
            UserMessage("Documents")
            BotMessage(title)
            options.forEach(i => {
              BotMessage(i)
            });
          }else if(options.textContent == "Accept Offer"){
            optionDiv.remove()
            const {AcceptOffer:{title}}=database
            const {AcceptOffer:{options}}=database
            const optiondiv =document.createElement("div");
            UserMessage("Accept Offer")
            BotMessage(title)
            options.forEach(i => {
              BotMessage(i)
            });
            chatContainer.appendChild(optiondiv)
      
          }else{
            optionDiv.remove()
            const {stepsForRegistration:{title}}=database
            const {stepsForRegistration:{options}}=database
            UserMessage("steps for Registration")
            BotMessage(title)
            options.forEach(i => {
                BotMessage(i)
            });
            const optiondiv = document.createElement('div');
            const image=document.createElement("img")
            image.className="step-Pictures"
            image.src="images/its.png"
            optiondiv.appendChild(image)
            chatContainer.appendChild(optiondiv)
          }
        });
      });
      UserMessage("Registration")
      BotMessage(title)
      chatContainer.appendChild(optionDiv)
    }else if(options.textContent == "Finance"){
      optiondiv.remove()
      const {Finance:{title}}=database
      const {Finance:{options}}=database
      const optionDiv =document.createElement("div");
      optionDiv.className="optionDiv"
      options.forEach(i => {
        var options=document.createElement("div")
        options.className="select-option"
        options.textContent=i;
        optionDiv.appendChild(options);
        options.addEventListener("click",()=>{
          if(options.textContent == "Nsfas bursary"){
            optionDiv.remove()
            const {NsfasBursary:{title}}=database
            const {NsfasBursary:{options}}=database
            const optiondiv =document.createElement("div");
            options.forEach(i => {
              var options=document.createElement("div")
              options.className="select-option"
              options.textContent=i;
              optiondiv.appendChild(options)
              options.addEventListener("click",()=>{
                if(options.textContent=="website"){
                  window.open("https://www.nsfas.org.za/content/")
                }else if (options.textContent=="Twitter"){
                  window.open("https://twitter.com/myNSFAS")
                }else if(options.textContent=="Facebook"){
                  window.open("https://web.facebook.com/MyNSFAS/?_rdc=1&_rdr")
                }
              })
            });
            UserMessage("NsfasBursary")
            BotMessage(title)
            chatContainer.appendChild(optiondiv)
          }else if(options.textContent == "Ezaga"){
            optionDiv.remove()
            const {Ezaga:{title}}=database
            const {Ezaga:{options}}=database
            const optiondiv =document.createElement("div");
            options.forEach(i => {
              var options=document.createElement("div")
              options.className="select-option"
              options.textContent=i;
              optiondiv.appendChild(options)
              options.addEventListener("click",()=>{
                if(options.textContent=="website"){
                  window.open("https://www.ezaga.co.za/")
                }else if (options.textContent=="Twitter"){
                  window.open("https://twitter.com/ezaga_za?lang=en")
                }else if(options.textContent=="Facebook"){
                  window.open("https://www.facebook.com/ezaga.co.za/")
                }
              })
            });
            UserMessage("Ezaga")
            BotMessage(title)
            chatContainer.appendChild(optiondiv)
          }
          else{
            optionDiv.remove()
            const {bursary:{title}}=database
            const {bursary:{options}}=database
            const optiondiv =document.createElement("div");
            options.forEach(i => {
              var options=document.createElement("div")
              options.className="select-option"
              options.textContent=i;
              optiondiv.appendChild(options)
              options.addEventListener("click",()=>{
                if(options.textContent=="NRF"){
                  window.open("https://www.nrf.ac.za/")
                }else if (options.textContent=="SETA"){
                  window.open("https://www.servicesseta.org.za/")
                }else if(options.textContent=="Fundi"){
                  window.open("https://www.fundi.co.za/")
                }
                else{
                  window.open("http://www.funzalushaka.doe.gov.za/")
                }
              })
            });
            UserMessage("bursary")
            BotMessage(title)
            chatContainer.appendChild(optiondiv)
          }
        });
      });
      UserMessage("Finance")
      BotMessage(title)
      chatContainer.appendChild(optionDiv)

    }else if(options.textContent == "Housing"){
      optiondiv.remove()
      const {Housing:{title}}=database
      const {Housing:{options}}=database
      const optionDiv =document.createElement("div");
      options.forEach(i => {
        var options=document.createElement("div")
        options.className="select-option"
        options.textContent=i;
        optionDiv.appendChild(options)
        options.addEventListener("click",()=>{
          if(options.textContent == "Specific Documents"){
            optionDiv.remove()
            const {SpecificDocuments:{title}}=database
            const {SpecificDocuments:{options}}=database
            const optiondiv =document.createElement("div");
             UserMessage("Specific Documents")
             BotMessage(title)
            options.forEach(i => {
              BotMessage(i)
            });
            chatContainer.appendChild(optiondiv)
          }else if(options.textContent == "Location"){
            optionDiv.remove()
            const {Location:{title}}=database
            const {Location:{options}}=database
            const optiondiv =document.createElement("div");
             UserMessage("location")
            options.forEach(i => {
              BotMessage(i)
            });
            
          }
        });
      });
      UserMessage("Housing")
      BotMessage(title)
      chatContainer.appendChild(optionDiv)

    }else if(options.textContent == "Recreation"){
      optiondiv.remove()
      const {Recreation:{title}}=database
      const {Recreation:{options}}=database
      const optionDiv =document.createElement("div");
      optionDiv.className="optionDiv"
      options.forEach(i => {
        var options=document.createElement("div")
        options.className="select-option"
        options.textContent=i;
        optionDiv.appendChild(options)
        options.addEventListener("click",()=>{
          if(options.textContent == "Indoor"){
            optionDiv.remove()
            const {Indoor:{title}}=database
            const {Indoor:{options}}=database
            const optiondiv =document.createElement("div");
             optiondiv.className="optionDiv"
            options.forEach(i => {
              var options=document.createElement("div")
              options.className="select-option"
              options.textContent=i;
              optiondiv.appendChild(options)
            });
            UserMessage("Indoor")
            BotMessage(title)
            chatContainer.appendChild(optiondiv)
          }else if(options.textContent == "Outdoor"){
            optionDiv.remove()
            const {Outdoor:{title}}=database
            const {Outdoor:{options}}=database
            const optiondiv =document.createElement("div");
             optiondiv.className="optionDiv"
            options.forEach(i => {
              var options=document.createElement("div")
              options.className="select-option"
              options.textContent=i;
              optiondiv.appendChild(options)
            });
            UserMessage("Outdoor")
            BotMessage(title)
            chatContainer.appendChild(optiondiv)
          }
        });
      });
      UserMessage("Recreation")
      BotMessage(title)
      chatContainer.appendChild(optionDiv)
    }else if(options.textContent == "Security"){
      optiondiv.remove()
      const {Security:{title}}=database
      const {Security:{options}}=database
      const optionDiv =document.createElement("div");

      options.forEach(i => {
        var options=document.createElement("div")
        options.className="select-option"
        options.textContent=i;
        optionDiv.appendChild(options)
        options.addEventListener('click', () =>{
          if (options.textContent="Emergency services"){
            optionDiv.remove()
            const {EmergencyServices:{title}}=database
            const {EmergencyServices:{options}}=database

            UserMessage("Emergency Services")
            BotMessage(title)
            options.forEach(i => {
              BotMessage(i)
            });
          }
        });
      });
      UserMessage("Security")
      BotMessage(title)
      chatContainer.appendChild(optionDiv)
    }
    else if(options.textContent == "AcademicIssues"){
      optiondiv.remove()
      const {AcademicIssues:{title}}=database
      const {AcademicIssues:{options}}=database
      const optionDiv =document.createElement("div");
      options.forEach(i => {
        var options=document.createElement("div")
        options.className="select-option"
        options.textContent=i;
        optionDiv.appendChild(options)
        options.addEventListener('click', () =>{
          if (options.textContent =="Access Moodle"){
            optionDiv.remove()
            const {AccessMoodle:{title}}=database
            const {AccessMoodle:{options}}=database
            UserMessage("Access Moodle")
            BotMessage(title)
            options.forEach(i => {
              BotMessage(i)
            });
          }else{
            optionDiv.remove()
            const {Enrollment:{title}}=database
            const {Enrollment:{options}}=database
            UserMessage("Enrollment")
            BotMessage(title)
            options.forEach(i => {
              BotMessage(i)
            });

          }
        });
        
      });
      UserMessage("AcademicIssues")
      BotMessage(title)
      chatContainer.appendChild(optionDiv)
    }else{
      optiondiv.remove()
      const {Rules:{title}}=database
      const {Rules:{options}}=database
      const optionDiv =document.createElement("div");
      options.forEach(i => {
        var options=document.createElement("div")
        options.className="select-option"
        options.textContent=i;
        optionDiv.appendChild(options)
        options.addEventListener("click",()=>{
          if(options.textContent == "Exam Rules"){
            optionDiv.remove()
            const {ExamRules:{title}}=database
            const {ExamRules:{options}}=database
            const optiondiv =document.createElement("div");
            UserMessage("Exam Rules")
            BotMessage(title)
            options.forEach(i => {
              BotMessage(i)
            });
            chatContainer.appendChild(optiondiv)
          }else if(options.textContent == "Residence Rules"){
            optionDiv.remove()
            const {ResidenceRules:{title}}=database
            const {ResidenceRules:{options}}=database
            const optiondiv =document.createElement("div");
            UserMessage("Residence Rules")
            BotMessage(title)
            options.forEach(i => {
              BotMessage(i)
            });
            chatContainer.appendChild(optiondiv)
          }
          else{
            optionDiv.remove()
            const {changePrograms:{title}}=database
            const {changePrograms:{options}}=database
            const optiondiv =document.createElement("div");
            UserMessage("Change programs")
            BotMessage(title)
            options.forEach(i => {
              BotMessage(i)  
            });
            chatContainer.appendChild(optiondiv)
          }
        });
      });
      UserMessage("Rules")
      BotMessage(title)
      chatContainer.appendChild(optionDiv)
    }
  });
});
chatContainer.appendChild(optiondiv)
//go to current bot message
chatContainer.scrollTop = chatContainer.scrollHeight;
}
//module for creating messages
function UserMessage(message){
  const messageDiv= createMessageDiv("user-message");
  const messageText = createMessageTextUSer(message);
  messageDiv.appendChild(messageText);
  chatContainer.appendChild(messageDiv);
  textinput.value="";
  chatContainer.scrollTop=chatContainer.scrollHeight;
};
// create bot message
function BotMessage(message){
  const botDiv= createMessageDiv("bot-body-message");
  const messageText=createMessageTextBot(message);
  botDiv.appendChild(messageText)
  chatContainer.appendChild(botDiv);
  chatContainer.scrollTop=chatContainer.scrollHeight
};
 //create div for both user message and bot response
 function createMessageDiv(className){
    const messageDiv=document.createElement("div");
    messageDiv.classList.add("message",className);
    return messageDiv;
 }
 function getTimeMessage(message){
    const timeDiv = createMessageDiv("time-text");
    const biggerDIv= createMessageDiv("time-box")
    const messageText = createTimeText(message)
    biggerDIv.appendChild(timeDiv);
    timeDiv.appendChild(messageText);
    chatContainer.appendChild(biggerDIv);
    chatContainer.scrollTop=chatContainer.scrollHeight;
 }
 ///create a div that is going to hold the user text
 function createMessageTextUSer(message){
    const messageText=document.createElement("div");
    messageText.classList.add("message-text1");
    messageText.textContent=message;
    return messageText;
 }
 ///create a div that is going to hold the bot text
 function createMessageTextBot(message){
    const messageText=document.createElement("div");
    messageText.classList.add("message-text");
    messageText.textContent=message;
    return messageText
 }
 ///create a div that is going to hold the time 
 function createTimeText(message){
    const messageText=document.createElement("div");
    messageText.classList.add("timetext");
    messageText.textContent=message;
    return messageText
 }

 //store each word in and array for better comparison
 function tokenize(UserMessage){
    return UserMessage.toLowerCase().split(/\s+/)
 }
 //hanlde inconming user message and call proper function
 function HandleResponse(userMessage){
    const tokenizedUserText=tokenize(userMessage);
    let bestMatch=""
    let maxSimilarity=0;
    let curCategory=null;
    //loop through all categories
    for(const category in database){
        const tokens=tokenize(category.toLowerCase());
        const similarity =stringSimilarity.compareTwoStrings(
            tokenizedUserText.join(""),
            tokens.join("")
        );
        if(similarity>maxSimilarity){
            maxSimilarity=similarity;
            curCategory=category
            bestMatch=database[category]
        }
    }
    console.log(maxSimilarity);
    if(maxSimilarity<0.5){
        menuBaseGenerate()
    }else{
        bestMatch.options.forEach(option => {
            BotMessage(option)
        });
    }
 }
getTimeMessage(time)
function main(){
  BotMessage("Hi Im unibot,I am here to help you learn  more about the university of zululand😊.")
document.getElementById("submit-button").addEventListener("click",()=>{
        const usermessage = textinput.value;
        if(usermessage){
            UserMessage(usermessage);
            setTimeout(()=>{
                HandleResponse(usermessage);
            },10)
        }
    });
    textinput.addEventListener("keyup",(event)=>{
        if (event.key === "Enter") {
          document.getElementById("submit-button").click()
        } 
    });
}
main()

module.exports=HandleResponse;