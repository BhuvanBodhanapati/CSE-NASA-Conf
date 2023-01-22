import React from 'react'
import CommiteChair from './commitechair'
import PageTitle from '../../components/pageTitle/pageTitle'
import './commite.css'

const HONOROABLE_Chair = [
  "Dr.N. Vijaya Bhaskar Choudary,  Secretary & Correspondent, MITS",
  "Mrs. N Keerthi, Executive Director, MITS",
];
const Chief_Patron = [
  "Dr C Yuvaraj, Principal, MITS",
  "Mr K Sisir, Member Academic Council, MITS",
  
];
const Patron = [
  "Prof. Goutam Chakraborty,Distinguished Professor & Dean, CSE, MITS",
  "Dr. R. Kalpana, Professor & HOD, CSE, MITS",
];
const Conference_Chair = [
  "Dr. R. Nidhya, Professor, CSE, MITS",
  "Dr. G. N. Vivekananda, Assoc. Professor, CSE, MITS",
];
const Advisory_Committee= [
  "Prof. P. Chenna Reddy, Professor, CSE, JNTUA, Ananthapuramu.",
  "Dr. S. Karthik, Professor & Dean, CSE, SNS College of Technology, Coimabtore",
  "Dr. S. Surendiren, Assoc. Professor, CSE, NIT Karaikal",
  "Dr. Ilknur Aydin, Assoc. professor, Computer Systems, Farmingdale State College, Newyork, USA",
];
const Technical_Programme_Committee = [
  "Dr. Basabi Chakraborty Professor & Dean, CST, MITS",
  "Dr. Mahaboob Basha Shaik, Professor, CSE, MITS",
  "Dr. K. Lakshmi, Professor, CSE, MITS",
  "Dr. D. Jagadeesan, Professor, CSE, MITS",
  "Dr. V. Arun, Professor, CSE, MITS",
];
const Technical_Programme_Chair = [
  "Dr. G. Arun Kumar, Assoc. Professor, CSE, MITS",
  "Dr. K. Sudhakar, Sr. Asst. Professor, CSE, MITS",
  "Dr. D. J. Ashpin Pabi, Asst. Professor, CSE, MITS",
  "Dr. K. P. Manikandan, Asst. Professor, CSE, MITS",
  "Mrs. S. Kusuma, Asst. Professor, CSE, MITS",
  "Mr. Thangarasan T, Asst. Professor, CSE, MITS",
  "Mr. G. Sreenivasulu, Asst. Professor, CSE, MITS",
  "Mrs. G. B. Renuka, Asst. Professor, CSE, MITS"
];
const Organizing_Committee_Members = [
"Dr. P. V. Venkateswara Rao, Assoc. Professor, CSE, MITS",
"Dr. R. Sudhakar, Assoc. Professor, CSE, MITS",
"Dr. S Elango, Asst. Professor, CSE, MITS",
"Dr. R. Logesh Babu, Asst. Professor, CSE, MITS",
"Dr. R. Sundar, Asst. Professor, CSE, MITS",
"Mr. Syed Abuthahir S, Asst. Professor, CSE, MITS",
"Mr. B. Galeebathullah, Asst. Professor, CSE, MITS",
"Mr. J. Nagaraj, Asst. Professor, CSE, MITS",
"Mrs. M. Bommy, Asst. Professor, CSE, MITS",
"Mr. Aleemullakhan Pathan, Asst. Professor, CSE, MITS",
"Mr. Anandaraj B, Asst. Professor, CSE, MITS",
"Mrs. V. Nirupa, Asst. Professor, CSE, MITS",
"Mr. P. Kaliyamoorthi, Asst. Professor, CSE, MITS",
"Mrs. R. Usha, Asst. Professor, CSE, MITS",
"Mr. B. S. H. Shayeez Ahamed, Asst. Professor, CSE, MITS",
"Ms. G. Vasundara Devi, Asst. Professor, CSE, MITS",
"Mr. G. Muthugurunathan, Asst. Professor, CSE, MITS",
"Mr. Gowtham A, Asst. Professor, CSE, MITS",
"Mr. K. Sathish, Asst. Professor, CSE, MITS",
"Mr. K H Shabbeer Basha, Asst. Professor, CSE, MITS",
"Mrs. V. Geetha, Asst. Professor, CSE, MITS",
"Ms. Arya Surendran, Asst. Professor, CSE, MITS",
];
const CommitePage = () => {
  return (
    <div className="commitePageDiv">
      <PageTitle label="Committee"/>
      <CommiteChair
        label="Honoroable Chair"
        list={HONOROABLE_Chair}
        defaultExpanded={true}
      />
      <CommiteChair
        label="Chief Partron"
        list={Chief_Patron}
        defaultExpanded={true}
      />
      <CommiteChair
        label="Partron"
        list={Patron}
        defaultExpanded={true}
      />
      <CommiteChair 
        label="Conference Chair" 
        list={Conference_Chair} 
        defaultExpanded={true}  
        />
      <CommiteChair
        label="Advisory Committee" 
        list={Advisory_Committee} />
      <CommiteChair
        label="Technical Programme Committee"
        list={Technical_Programme_Committee}
      />
      <CommiteChair
        label="Technical Programme Chair"
        list={Technical_Programme_Chair}
      />
      <CommiteChair
        label="Organizing Committee Members"
        list={Organizing_Committee_Members}
      />
    </div>
  );
}

export default CommitePage