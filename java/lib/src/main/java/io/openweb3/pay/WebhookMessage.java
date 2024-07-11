package io.openweb3.pay;

import java.util.Objects;
import com.google.gson.annotations.SerializedName;
import io.openweb3.pay.models.OrderOut;
 
 /**
  * WebhookMessage
  */
 public class WebhookMessage {
   public static final String SERIALIZED_NAME_EVENT_TYPE = "event_type";
   @SerializedName(SERIALIZED_NAME_EVENT_TYPE)
   private String eventType = null;
 
   public static final String SERIALIZED_NAME_PAYLOAD = "payload";
   @SerializedName(SERIALIZED_NAME_PAYLOAD)
   private OrderOut payload;
 
 
   public WebhookMessage eventType(String eventType) {
	 this.eventType = eventType;
	 return this;
   }
 
	/**
	* eventType
	* @return eventType
   **/
   public String getEventType() {
	 return eventType;
   }
 
 
   public void setEventType(String eventType) {
	 this.eventType = eventType;
   }
 
 
   public WebhookMessage payload(OrderOut payload) {
	 
	 this.payload = payload;
	 return this;
   }
 
	/**
	* payload
	* @return payload
   **/
   public OrderOut getPayload() {
	 return payload;
   }
 
 
   public void setPayload(OrderOut payload) {
	 this.payload = payload;
   }
 
 
   @Override
   public boolean equals(Object o) {
	 if (this == o) {
	   return true;
	 }
	 if (o == null || getClass() != o.getClass()) {
	   return false;
	 }
	 WebhookMessage orderIn = (WebhookMessage) o;
	 return Objects.equals(this.eventType, orderIn.eventType) &&
		 Objects.equals(this.payload, orderIn.payload);
   }
 
   @Override
   public int hashCode() {
	 return Objects.hash(eventType, payload);
   }
 
   @Override
   public String toString() {
	 StringBuilder sb = new StringBuilder();
	 sb.append("class WebhookMessage {\n");
	 sb.append("    eventType: ").append(toIndentedString(eventType)).append("\n");
	 sb.append("    payload: ").append(toIndentedString(payload)).append("\n");
	 sb.append("}");
	 return sb.toString();
   }
 
   /**
	* Convert the given object to string with each line indented by 4 spaces
	* (except the first line).
	*/
   private String toIndentedString(Object o) {
	 if (o == null) {
	   return "null";
	 }
	 return o.toString().replace("\n", "\n    ");
   }
 
 }
 
 