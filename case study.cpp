//============================================================================
// Name        : case.cpp
// Author      : a
// Version     :
// Copyright   : Your copyright notice
// Description : Hello World in C++, Ansi-style
//============================================================================

#include <iostream>
#include <cstring>
#include <cstdlib>
#include <stdio.h>


using namespace std;


class student
{
private:
	int id;
	char name[50];
	int ranka;
	int rankb;
	int rankc;
	char degree[50];
	float degreemarks;
	char coursename[50];
	int centreid;
	int payment;
	int reported;
	int prn_no;
	int preference;

public:
		student()
				{
				 id = 0;
				 strcpy(name, "");
				 ranka = 0;
				 rankb = 0;
				 rankc = 0;
				 strcpy(degree, "");
				 degreemarks = 0.0;
				 strcpy(coursename, "");
				 centreid = 0;
				 payment = 0;
				 reported = 0;
				 prn_no = 0;
				 preference = 0;
				}

			student(int pid, const char *pname, int pranka, int prankb, int prankc, const char *pdegree, float pdegreemark, const char *pcoursename, int pcentreid, int ppayment,int preported, int pprnno, int preference)
			{

					id = pid;
					strcpy (name, pname);
					int  ranka();
					int  rankb();
					int rankc();
					strcpy (degree, pdegree);
					float  degreemarks();
					strcpy(coursename, pcoursename);
					int  centreid();
					int  payment();
					int  reported();
					int  prn_no();
					int  prefe();
			}

			void set_id(int pid)
			{
				id=pid;
			}

			void set_name(const char *pname)
			{
				strcpy(name, pname);
			}

			void set_ranka(int pranka)
			{
				ranka = pranka;
			}

			void set_rankb(int prankb)
			{
				rankb = prankb;
			}

			void set_rankc(int prankc)
			{
				rankc = prankc;
			}

			void set_degree(const char *pdegree)
			{
				strcpy(degree, pdegree);
			}

			void set_degreemarks(float pdegreemarks)
			{
				degreemarks = pdegreemarks;
			}

			void set_course_name(const char *pcoursename)
			{
				strcpy(coursename, pcoursename);
			}

			void set_centre_id(int pcentreid)
			{
				centreid = pcentreid;
			}

			void set_payment(int ppayment)
			{
				payment = ppayment;
			}

			void set_reported(int preported)
			{
				reported = preported;
			}

			void set_prn_no(int pprn_no)
			{
				prn_no = pprn_no;
			}

			void set_preference(int pprefe)
			{
				preference = pprefe;
			}


			int get_id()
			{
				return id;
			}

			char* get_name()
			{
				return name;
			}

			int get_rank_a()
			{
				return ranka;
			}

			int get_rank_b()
			{
				return rankb;
			}

			int get_rank_c()
			{
				return rankc;
			}

			char* get_degree()
			{
				return degree;
			}

			float get_degree_mark()
			{
				return degreemarks;
			}

			char* get_course_name()
			{
				return coursename;
			}

			int get_centre_id()
			{
				return centreid;
			}

			int get_payment()
			{
				return payment;
			}

			int get_reported()
			{
				return reported;
			}

			int get_prn_no()
			{
				return prn_no;
			}

			int get_preference()
			{
				return preference;
			}

			void display()
			{
				cout << id <<", "<< name <<", "<<ranka<<", "<<rankb<<", "<<rankc<<", "<<degree<<", "<<degreemarks<<", "<<coursename<<", "<<centreid<<", "<<payment<<", "<<reported<<", "<<prn_no<<", "<<preference<<", "<<endl;

			}


};

void load_student(student students[])
{

	FILE *fp = fopen("students.csv","r");
	char line[2048], *ptr;
	int i;
	if(fp == NULL)
	{
		perror("failed to open students file");
		return;
	}



	i=0;

		while(fgets(line, sizeof(line), fp) != NULL)
		{
			student s;
			//read id
			ptr = strtok(line, ",\n");
			if(ptr == NULL) // if first token is not available
			continue;


			s.set_id(atoi(ptr));
			// read id
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
				continue;


			s.set_name(ptr);
			// read name
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
				continue;

			s.set_ranka(atoi(ptr));
			// read rank_a
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
				continue;


			s.set_rankb(atoi(ptr));
			// read rank_b
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
				continue;

			s.set_rankc(atoi(ptr));
			// read rank_c
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
			continue;

			s.set_degree(ptr);
			// read degree
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
			continue;

			s.set_degreemarks(atof(ptr));
			// read degree_marks
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
			continue;

			s.set_course_name(ptr);
			// read course_name
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
			continue;

			s.set_centre_id(atoi(ptr));
			// read centre_id
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
			continue;

			s.set_payment(atoi(ptr));
			// read payment
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
			continue;

			s.set_reported(atoi(ptr));
			// read reported
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
			continue;

			s.set_prn_no(atoi(ptr));
			// read prn_no
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
			continue;


			s.set_preference(atoi(ptr));
			// read preference
			ptr = strtok(NULL, ",\n");
			if(ptr == NULL) // if next token is not available
			continue;

		}
			 fclose(fp);

			cout <<"student loaded" << endl;
}





	void save_students(student students[])
		{
		 FILE *fp = fopen("students.csv", "w");
		int i;
		if(fp == NULL)
		{
			 perror("failed to open books file");
			return;
		}

		for(i=0; i<200; i++)
		{
			fprintf(fp, "%d, %s , %d, %d ,%d, %s, %f, %s , %d, %d, %d, %d \n",

					students[i].get_id(), students[i].get_name(), students[i].get_rank_a(), students[i].get_rank_b(), students[i].get_rank_c(), students[i].get_degree(), students[i].get_degree_mark(), students[i].get_course_name(), students[i].get_centre_id(), students[i].get_payment(),students[i].get_reported(), students[i].get_prn_no(), students[i].get_preference());
		}

		 fclose(fp);

		cout << "students saved." << endl;


}

	int main()
	{
	int i;
	student students[200];
	// load data from file into students array
	load_student(students);
	//print book array contents
	for(i=0;i<200;i++)
		students[i].display();
		save_students(students);
	return 0;

	}
