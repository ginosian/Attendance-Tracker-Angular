import {KnowledgeGrade} from './misc/knowledge.grade';

export class Skill {
  skill: string;
  experience: number;
  theoryKnowledge: KnowledgeGrade;
  practicalKnowledge: KnowledgeGrade;

  constructor(skill: string, experience: number, theryKnowledge: KnowledgeGrade, practicalKnowledge: KnowledgeGrade) {
    this.skill = skill;
    this.experience = experience;
    this.theoryKnowledge = theryKnowledge;
    this.practicalKnowledge = practicalKnowledge;
  }
}
