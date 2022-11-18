# Project ADA 2022
# Path towards Fame: To-Do’s and Not-To-Do’s for new YouTubers

## Abstract: 

This project intends to investigate the key(s) to success in becoming a renowned YouTuber. We want to highlight past trends and patterns in order to understand what factors play into a success story and what it takes in terms of time spent and effort to establish a new channel as a one person Youtuber. We know that different audiences of different categories require specific treatment. Therefore, we first explore the entire dataset on a surface level before focusing on a handful of categories in our preliminary analysis to identify a possible gap with the most potential for a young person to become a renowned YouTuber. By investigating the key(s) to success we want to emphasize what is necessary with respect to commitment and volume to gain subscriptions and likes.

## Research Questions:

### Part 1: Initial Analysis and Data Visualisation

To start with, we conducted the following analysis to have an idea about the attributes that could have importance on the Youtubers’ success. The results of this section will be used to help us select an adequate subset of the sample and to determine which aspects of the YouNiverse dataset to dig deeper into. For findings from each question, please refer to the Jupyter Notebook.

#### Question 1
Description: How is the weekly content creation pattern of Youtubers regarding the upload frequency, video lengths, upload time? \
Method: The average video lengths of videos uploaded each week, as well as the upload time (days of the week) can be determined by group the `yt_metadata_en.jsonl.gz` by `channel_id`.

#### Question 2
Description: How are the subscription patterns for reaching key numbers of subscribers, aka, 1k, 10k, 100k, 1M? \
Method: We created two dataframes, one with all channels with less than 10K subscribers, another one with more than 1M subscribers using `df_timeseries_en.csv.gz`. The intersect of the two gave a list of channels that started with at most 10K and now have at least 1M subscribers. The mean time taken to reach a specific number of subscribers was then computed. \
Additional To-Dos: We will go deeper into this implementation with the specific categories we will choose for the Milestone 3.


#### Question 3
Description: Which categories are more popular during the study period? Which types of videos receive more positive feedback? \
Method: Sum-up the like counts and view counts of each video from `yt_metadata_en.jsonl.gz`, and aggregate by category.

#### Question 4
Description: What are the patterns of titles for each category? \
Method: We determined whether the titles use more positive words or negative words, and how the titles address the viewers by determining the personal pronouns being used using the list of words provided in Homework 1. We then tried to find if there is a pattern for each category.

### Part 2: Further Analysis

From Part 1 Analysis, we decided to focus on Gaming, People & Blogs, Comedy. The reason behind this choice is because we are trying to help our little brother to succeed, and since he is just a single person without a big team behind him, and on top of that, he is not particularly talented in music, handcraft and teaching, we decided to eliminate Music, How-to & Style, Education, Science & Technology, Entertainment, Film & Entertainment, Movies, Shows and How-to & Style.

#### Key Questions:
 - Which factors help a YouTuber in Gaming, People & Blogs or Comedy respectively gain more subscribers?
 - How do sentiments in titles and tags affect views and how do these relationships change over time?


#### Subquestion 1
Description: How does the video upload frequency, time of the week, and video length affect the subscription rate of the selected channels? \
Method: Model this using a linear regression model. \
Timeline: By 13/12/2022 \
Organization: Paul

#### Subquestion 2
Description: How does the language used in titles affect subscription number? \
Method: We will classify the sentiments of titles and tags using packages such as `NLTK` and try to see if this factor affects subscription number of the channels using relevant skills we learned in observational studies. \
Timeline: By 15/12/2022 \
Organization: Wenxiu

#### Subquestion 3
Description: Can we predict the channel's success based on channel information, including average video length, upload frequency, usual time of uploads, categories of videos uploaded, positive/negative sentiments of the title, usual way of addressing the viewers, the number of words in the title, and the number of tags used. \
Method: We can implement kNN method or Random Forests to train the dataset. \
Timeline: By 13/12/2022 \
Organization: Dorothee

#### Subquestion 4 
Description: What are the most common topics in each of the chosen categories? \
Method: We can deal with the `yt_metadata_en.jsonl.gz` dataset to get the list of tags of each video according to its category, split them and classify them according to the ones that come back the most times. This way, we get the most used keywords in each video category and therefore the most popular topics. \
Timeline: By 15/12/2022 \
Organization: Jules

#### Subquestion 5
Description: Does diversification of video categories help the channel become more successful? \
Method: For this question, we will determine whether the filtered channels use multiple categories in their videos, and if they showed clear shifts from one category to another. Ultimately, we want to use this information and methods such as A/B testing and observational studies to determine whether diversification of categories can add to channels’ success. \
Timeline: By 18/12/2022 \
Organization: Paul

## Additional Dataset:
**Sentiment Analysis**: Note that the two datasets below are given from Homework 1. However, for Milestone 3, we intend to find an updated version of them, as well as using more advanced models such as `NLTK` package to conduct the analysis.
- Positive words (`https://ptrckprry.com/course/ssd/data/positive-words.txt`)
- Negative words (`https://ptrckprry.com/course/ssd/data/negative-words.txt`)


**Title & Tags Metadata:**

We will generate this dataset from the raw YouNiverse dataset by including three columns: `categories` and `title` or `tags`.

### Team ADAptation members

| **Name**                 | **Email**                        |
| -------------------- | ---------------------------- |
| Jules Maglione       | jules.maglione@epfl.ch       |
| Paul Nadal           | paul.nadal@epfl.ch           |
| Wenxiu Du            | wenxiu.du@epfl.ch            |
| Dorothee Beckendorff | dorothee.beckendorff@epfl.ch |
