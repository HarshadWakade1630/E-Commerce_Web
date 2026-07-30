#include <stdio.h>
#include <pthread.h>

pthread_mutex_t lock1, lock2;

void* worker(void* arg) {
    int id = *(int*)arg;

    pthread_mutex_lock(&lock1);
    printf("Thread %d locked lock1\n", id);

    pthread_mutex_lock(&lock2);
    printf("Thread %d locked lock2\n", id);

    printf("Thread %d working...\n", id);

    pthread_mutex_unlock(&lock2);
    pthread_mutex_unlock(&lock1);

    return NULL;
}

int main() {
    pthread_t t1, t2;
    int id1 = 1, id2 = 2;

    pthread_mutex_init(&lock1, NULL);
    pthread_mutex_init(&lock2, NULL);

    pthread_create(&t1, NULL, worker, &id1);
    pthread_create(&t2, NULL, worker, &id2);

    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    pthread_mutex_destroy(&lock1);
    pthread_mutex_destroy(&lock2);

    return 0;
}
