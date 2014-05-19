// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_om.tweets');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_om.wordcount');
goog.require('cljs.core.async');
goog.require('cljs_om.ajax');
goog.require('cljs.core.async');
goog.require('cljs_om.timeseries');
goog.require('cljs_om.util');
goog.require('cljs_om.ui');
goog.require('cljs_om.ajax');
goog.require('cljs_om.wordcount');
goog.require('cljs_om.timeseries');
goog.require('cljs_om.ui');
goog.require('cljs_om.util');
cljs.core.enable_console_print_BANG_.call(null);
cljs_om.tweets.add_to_tweets_map = (function add_to_tweets_map(app,tweets_map,tweet){return cljs.core.swap_BANG_.call(null,app,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tweets_map,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet))], null),cljs_om.util.format_tweet.call(null,tweet));
});
cljs_om.tweets.mod_sort_set = (function mod_sort_set(app,app_key,fun,set_key,val,rt){return cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,app_key,fun.call(null,app_key.call(null,cljs.core.deref.call(null,app)),new cljs.core.PersistentArrayMap.fromArray([set_key,val,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt)], true, false)));
});
cljs_om.tweets.add_rt_status = (function add_rt_status(app,tweet){if(cljs.core.contains_QMARK_.call(null,tweet,new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094)))
{var state = cljs.core.deref.call(null,app);var rt = new cljs.core.Keyword(null,"retweeted_status","retweeted_status",1378301094).cljs$core$IFn$_invoke$arity$1(tweet);var rt_id = cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt));var prev = rt_id.call(null,new cljs.core.Keyword(null,"retweets","retweets",708368263).cljs$core$IFn$_invoke$arity$1(state));var prev_rt_count = rt_id.call(null,new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825).cljs$core$IFn$_invoke$arity$1(state));if(!((prev == null)))
{cljs_om.tweets.mod_sort_set.call(null,app,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs.core.disj,new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736),new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(prev),rt);
cljs_om.tweets.mod_sort_set.call(null,app,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs.core.disj,new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678),new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678).cljs$core$IFn$_invoke$arity$1(prev),rt);
} else
{}
if(!((prev_rt_count == null)))
{cljs_om.tweets.mod_sort_set.call(null,app,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),cljs.core.disj,new cljs.core.Keyword(null,"count","count",1108755585),prev_rt_count,rt);
} else
{}
cljs.core.swap_BANG_.call(null,app,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rt-since-startup","rt-since-startup",716215825),rt_id], null),(prev_rt_count + 1));
cljs_om.tweets.mod_sort_set.call(null,app,new cljs.core.Keyword(null,"by-rt-since-startup","by-rt-since-startup",4240042183),cljs.core.conj,new cljs.core.Keyword(null,"count","count",1108755585),(prev_rt_count + 1),rt);
if((new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(rt) > new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(prev)))
{cljs.core.swap_BANG_.call(null,app,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"retweets","retweets",708368263),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(rt))], null),cljs_om.util.format_tweet.call(null,rt));
} else
{cljs.core.swap_BANG_.call(null,app,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"retweets","retweets",708368263),new cljs.core.Keyword(null,"latest","latest",4198990585)], null),rt);
}
cljs_om.tweets.mod_sort_set.call(null,app,new cljs.core.Keyword(null,"by-retweets","by-retweets",2961391677),cljs.core.conj,new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736),new cljs.core.Keyword(null,"retweet_count","retweet_count",2626664736).cljs$core$IFn$_invoke$arity$1(rt),rt);
return cljs_om.tweets.mod_sort_set.call(null,app,new cljs.core.Keyword(null,"by-favorites","by-favorites",4647881683),cljs.core.conj,new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678),new cljs.core.Keyword(null,"favorite_count","favorite_count",3873819678).cljs$core$IFn$_invoke$arity$1(rt),rt);
} else
{return null;
}
});
cljs_om.tweets.add_tweet = (function add_tweet(tweet,app,word_cloud){var state = cljs.core.deref.call(null,app);cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword(null,"count","count",1108755585),(new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(state) + 1));
cljs_om.tweets.add_to_tweets_map.call(null,app,new cljs.core.Keyword(null,"tweets-map","tweets-map",2156836003),tweet);
cljs_om.tweets.add_rt_status.call(null,app,tweet);
cljs_om.wordcount.process_tweet.call(null,app,new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(tweet));
cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-followers","by-followers",2904065425).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"followers_count","followers_count",553740247),new cljs.core.Keyword(null,"followers_count","followers_count",553740247).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"user","user",1017503549).cljs$core$IFn$_invoke$arity$1(tweet)),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet)], null)));
cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword(null,"by-id","by-id",1108060611),cljs.core.conj.call(null,new cljs.core.Keyword(null,"by-id","by-id",1108060611).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"id_str","id_str",4115261567).cljs$core$IFn$_invoke$arity$1(tweet)));
return word_cloud.redraw(cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,250,new cljs.core.Keyword(null,"words-sorted-by-count","words-sorted-by-count",4739523959).cljs$core$IFn$_invoke$arity$1(state))));
});
cljs_om.tweets.receive_sse = (function receive_sse(tweets_chan,e){var tweet = cljs.core.js__GT_clj.call(null,JSON.parse.call(null,e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);return cljs.core.async.put_BANG_.call(null,tweets_chan,tweet);
});
cljs_om.tweets.start_search = (function start_search(app,search,tweets_chan){var s = ((cljs.core._EQ_.call(null,search,""))?"*":search);if(!((new cljs.core.Keyword(null,"stream","stream",4416881394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)) == null)))
{new cljs.core.Keyword(null,"stream","stream",4416881394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)).close();
} else
{}
cljs.core.reset_BANG_.call(null,app,cljs_om.util.initial_state.call(null));
cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword(null,"search","search",4402534682),s);
(window["location"]["hash"] = encodeURIComponent(s));
cljs.core.swap_BANG_.call(null,app,cljs.core.assoc,new cljs.core.Keyword(null,"stream","stream",4416881394),(new EventSource([cljs.core.str("/tweetFeed?q="),cljs.core.str(s)].join(''))));
new cljs.core.Keyword(null,"stream","stream",4416881394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)).addEventListener("message",((function (s){
return (function (p1__9578_SHARP_){return cljs_om.tweets.receive_sse.call(null,tweets_chan,p1__9578_SHARP_);
});})(s))
,false);
return cljs.core.doall.call(null,(function (){var iter__4198__auto__ = ((function (s){
return (function iter__9583(s__9584){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__9584__$1 = s__9584;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9584__$1);if(temp__4126__auto__)
{var s__9584__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9584__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__9584__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__9586 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__9585 = 0;while(true){
if((i__9585 < size__4197__auto__))
{var x = cljs.core._nth.call(null,c__4196__auto__,i__9585);cljs.core.chunk_append.call(null,b__9586,cljs_om.ajax.prev_search.call(null,search,100,(100 * x)));
{
var G__9587 = (i__9585 + 1);
i__9585 = G__9587;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9586),iter__9583.call(null,cljs.core.chunk_rest.call(null,s__9584__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9586),null);
}
} else
{var x = cljs.core.first.call(null,s__9584__$2);return cljs.core.cons.call(null,cljs_om.ajax.prev_search.call(null,search,100,(100 * x)),iter__9583.call(null,cljs.core.rest.call(null,s__9584__$2)));
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4198__auto__.call(null,cljs.core.range.call(null,10));
})());
});

//# sourceMappingURL=tweets.js.map