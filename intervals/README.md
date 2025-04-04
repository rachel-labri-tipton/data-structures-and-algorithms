### `interval scheduling`

Interval scheduling is a class of problems that consider a set of tasks. Each task is represented by an interval describing the time in which it needs to be processed by some machine. 

These scheduling problems assume that all tasks are being run on a single machine. 

The interval scheduling maximization problem (ISMP) is to find a largest compatible set, i.e., a set of non-overlapping intervals of maximum size. The goal here is to execute as many tasks as possible, that is, to maximize the throughput. It is equivalent to finding a maximum independent set in an interval graph.

A generalization of the problem considers 
k
>
1
{\displaystyle k>1} machines/resources.[1] Here the goal is to find 
k
{\displaystyle k} compatible subsets whose union is the largest.

In an upgraded version of the problem, the intervals are partitioned into groups. A subset of intervals is compatible if no two intervals overlap, and moreover, no two intervals belong to the same group (i.e., the subset contains at most a single representative of each group). Each group of intervals corresponds to a single task, and represents several alternative intervals in which it can be executed.

The *group interval scheduling decision problem* (GISDP) is to decide whether there exists a compatible set in which all groups are represented. The goal here is to execute a single representative task from each group. GISDPk is a restricted version of GISDP in which the number of intervals in each group is at most k.

The *group interval scheduling maximization problem* (GISMP) is to find a largest compatible set - a set of non-overlapping representatives of maximum size. The goal here is to execute a representative task from as many groups as possible. GISMPk is a restricted version of GISMP in which the number of intervals in each group is at most k. This problem is often called JISPk, where J stands for Job.

GISMP is the most general problem; the other two problems can be seen as special cases of it:

ISMP is the special case in which each task belongs to its own group (i.e. it is equal to GISMP1).
GISDP is the problem of deciding whether the maximum exactly equals the number of groups.

All these problems can be generalized by adding a weight for each interval, representing the profit from executing the task in that interval. Then, the goal is to maximize the total weight.