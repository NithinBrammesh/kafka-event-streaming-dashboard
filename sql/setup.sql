-- Create stream
CREATE STREAM ORDERS_STREAM (
    order_id STRING,
    order_date STRING,
    buyer_name STRING,
    city STRING,
    state STRING,
    sku STRING,
    description STRING,
    quantity INTEGER,
    amount DOUBLE,
    event_time BIGINT
)
WITH (
    KAFKA_TOPIC='orders_events_v2',
    VALUE_FORMAT='JSON',
    TIMESTAMP='event_time'
);

-- Create materialized table
CREATE TABLE ORDERS_BY_CITY_NAME AS
SELECT
    CONCAT(city,'_',buyer_name) AS city_name_key,
    LATEST_BY_OFFSET(city) AS city,
    LATEST_BY_OFFSET(buyer_name) AS buyer_name,
    LATEST_BY_OFFSET(order_id) AS order_id,
    LATEST_BY_OFFSET(order_date) AS order_date,
    LATEST_BY_OFFSET(state) AS state,
    LATEST_BY_OFFSET(sku) AS sku,
    LATEST_BY_OFFSET(description) AS description,
    LATEST_BY_OFFSET(quantity) AS quantity,
    LATEST_BY_OFFSET(amount) AS amount,
    LATEST_BY_OFFSET(event_time) AS event_time
FROM ORDERS_STREAM
GROUP BY CONCAT(city,'_',buyer_name)
EMIT CHANGES;
