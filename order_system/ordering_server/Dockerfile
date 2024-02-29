FROM openjdk:11 as stage1

WORKDIR /app

# gradle빌드시에 필요한 파일들을 workdir로 copy
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src

# /app/build/libs/*.jar 파일 아래 명령어를 통해 생성
RUN ./gradlew bootJar

FROM openjdk:11

WORKDIR /app

COPY --from=stage1 /app/build/libs/*.jar /app/app.jar

# build/libs 디렉토리 내의 JAR 파일을 찾아서 실행
ENTRYPOINT ["java", "-jar", "app.jar"]