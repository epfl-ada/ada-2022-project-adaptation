# Project ADA 2022
# Scientifically proven insights on how to become a famous YouTube Gamer

## Link to our website: https://paul-ndl.github.io/adaptation/

\
Link to the dataset repository : \
https://github.com/epfl-dlab/YouNiverse

## Abstract: 

This project intends to investigate the key(s) to success in becoming a renowned YouTuber. We want to highlight past trends and patterns in order to understand what factors play into a success story and what it takes in terms of time spent and effort to establish a new channel as a one person Youtuber in the gaming world. We know that different audiences of different categories require specific treatment. Therefore, we first explored the entire dataset on a surface level before focusing sepcifically on gaming in our analysis to identify the potential for a young person to become a renowned YouTuber. By investigating the key(s) to success we want to emphasize what is necessary with respect to commitment and volume to gain subscriptions, views and likes.

## Research Questions:

### Part 1: Initial Analysis and Data Visualization

To start with, we conducted the following analysis to have an idea about the attributes that could have importance on the Youtubers’ success. The results of this section are used to select an appropriate subset of the sample and to determine which aspects of the YouNiverse dataset we dig deeper into. For findings from each question, please refer to the Jupyter Notebook.

#### Question 1
Description: How do YouTubers' weekly content creation patterns differ in terms of frequency, length, and upload time? \
Method: The average video lengths of videos uploaded each week, as well as the upload time (days of the week) can be determined by group the `yt_metadata_en.jsonl.gz` by `channel_id`.

#### Question 2
Description: What are the patterns of subscription for attaining key subscriber levels, such as 1k, 10k, 100k, and 1M? \
Method: We created two dataframes, one with all channels with less than 10K subscribers, another one with more than 1M subscribers using `df_timeseries_en.csv.gz`. The intersection of the two datasets gave us a list of channels that started with a minimum of 10K subscribers and now have at least 1M subscribers. The mean time taken to reach a specific number of subscribers was then computed. \
Additional To-Dos: With the particular categories we select for Milestone 3, we will delve deeper into this approach.


#### Question 3
Description: Which categories are more popular during the study period? Which types of videos receive more positive feedback? \
Method: Sum-up the like counts and view counts of each video from `yt_metadata_en.jsonl.gz`, and aggregate by category.

#### Question 4
Description: What types of sentiments and personal pronouns in titles are more commonly used within each category? \
Method: We determined whether the titles use more positive words or negative words, and how the titles address the viewers by determining the personal pronouns being used using the list of words provided in Homework 1. We then compared trends across categories.

### Part 2: Further Analysis Milestone 3

Given the results in Part 1 of our Analysis, we decided to focus on only one category, Gaming. The reason behind this choice is because we are trying to help our little brother to succeed in starting his own gaming channel, and since he is just a single person without a big team behind him it seems more reasonable than e.g. Movies or Film & Entertainment. Therefore, we decided to eliminate the other catgories of Music, How-to & Style, Education, Science & Technology, Entertainment, Film & Entertainment, Movies and Shows.

#### Key Questions:
 - Which factors help a YouTuber in Gaming to gain popularity?
 - How does language in titles and tags affect views and how do these relationships change over time?


#### Subquestion 1
Description: How does the video upload frequency, time of the week, and video length affect the subscription rate of the selected channels? \
Method: Model this using a linear regression model. \
Timeline: By 13/12/2022 \


#### Subquestion 2
Description: How does the language used in titles and tags affect video's popularity? \
Method: We classify the sentiments of titles and tags using the package spacy and vaderSentiment and try to see if this factor affects view counts of videos using relevant skills we learned in observational studies. \
Timeline: By 15/12/2022 \


#### Subquestion 3
Description: Can we predict the channel's success based on channel information, including average video length, upload frequency, usual time of uploads, categories of videos uploaded, positive/negative sentiments of the title, person pronouns to address the viewers, the number of words in the title, and the number of tags used? \
Method: We implement kNN method or Random Forests to train the dataset. \
Timeline: By 13/12/2022 \


#### Subquestion 4 
Description: What are the most common topics in the category? \
Method: The `yt_metadata_en.jsonl.gz` dataset will be used to get a list of tags of each video according to its category. It is further split and classified according to the topics that occur most frequently. This way, we get the most used keywords in each video category and therefore the most popular topics. \
Timeline: By 15/12/2022 \


#### Subquestion 5
Description: Does a channel's success increase with a greater variety of categories? \
Method: For this question, we will determine whether the filtered channels use multiple categories in their videos, and if they showed clear shifts from one category to another. Ultimately, we want to use this information to determine whether a greater variety of categories can aid to a channels’ success. \
Timeline: By 18/12/2022 \


## Additional Datasets:
**Sentiment Analysis**: Note that the two datasets below are taken from Homework 1. However, for Milestone 3, we intend to use more advanced models, namely Spacy and VaderSentiment package to conduct the analysis.
- Positive words (`https://ptrckprry.com/course/ssd/data/positive-words.txt`)
- Negative words (`https://ptrckprry.com/course/ssd/data/negative-words.txt`)

**Title & Tags Metadata:** We generated this dataset from the raw YouNiverse dataset by including three columns: `categories` and `title` or `tags`.

## Contributions:
Jules: Generation of additional data sets and running tests
Paul: Creation of the website and final visualization
Wenxiu: Creation of basis for analysis and plotting graphs
Dorothee: Writing up the data story and preparation of final submission


### Team ADAptation members

| **Name**                 | **Email**                        |
| -------------------- | ---------------------------- |
| Jules Maglione       | jules.maglione@epfl.ch       |
| Paul Nadal           | paul.nadal@epfl.ch           |
| Wenxiu Du            | wenxiu.du@epfl.ch            |
| Dorothee Beckendorff | dorothee.beckendorff@epfl.ch |
