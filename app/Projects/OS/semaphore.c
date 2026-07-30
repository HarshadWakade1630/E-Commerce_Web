#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>
#include <unistd.h>

sem_t sem;

void* worker(void* arg) {
    int id = *(int*)arg;

    sem_wait(&sem);   // Acquire a slot

    printf("Thread %d entered\n", id);
    sleep(id);
    printf("Thread %d leaving\n", id);

    sem_post(&sem);   // Release the slot

    return NULL;
}

int main() {
    pthread_t t[5];
    int id[5] = {1,2,3,4,5};

    sem_init(&sem, 0, 2); // Only 2 threads allowed at once

    for(int i = 0; i < 5; i++)
        pthread_create(&t[i], NULL, worker, &id[i]);

    for(int i = 0; i < 5; i++)
        pthread_join(t[i], NULL);

    sem_destroy(&sem);

    return 0;
}
