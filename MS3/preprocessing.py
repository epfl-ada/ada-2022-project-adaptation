# -*- coding: utf-8 -*-
"""
Created on Fri Nov 11 13:57:20 2022

@author: du
"""

import pandas as pd
#DIR = "./data/"
DIR = "C:/Users/du/Desktop/Cours/ADA/ada_project/data/"
PATH_METADATA_DST = DIR + "yt_metadata_en.jsonl.gz"
PATH_METADATA_TAGS_HELPER = DIR + "yt_metadata_title_tags_helper.feather"

dfs = []

for df_json in pd.read_json(PATH_METADATA_DST, compression="infer", chunksize=5000000, lines=True):
    df_json.drop(["channel_id", "dislike_count","display_id","duration","like_count","description","upload_date","view_count","title","crawl_date"], inplace=True, axis=1)
    dfs.append(df_json)
    
df_final = pd.concat(dfs)
df_final.to_feather(PATH_METADATA_TAGS_HELPER)