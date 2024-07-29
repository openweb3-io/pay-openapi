/*
 * Pay API Documentations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package io.openweb3.pay.models;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.openweb3.pay.models.EndpointOut;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * ListResponseEndpointOut
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-29T14:50:22.360469+08:00[Asia/Shanghai]")
public class ListResponseEndpointOut {
  public static final String SERIALIZED_NAME_DATA = "data";
  @SerializedName(SERIALIZED_NAME_DATA)
  private List<EndpointOut> data = new ArrayList<>();

  public static final String SERIALIZED_NAME_TOTAL = "total";
  @SerializedName(SERIALIZED_NAME_TOTAL)
  private Integer total;

  public static final String SERIALIZED_NAME_HAS_NEXT = "hasNext";
  @SerializedName(SERIALIZED_NAME_HAS_NEXT)
  private Boolean hasNext;

  public static final String SERIALIZED_NAME_HAS_PREV = "hasPrev";
  @SerializedName(SERIALIZED_NAME_HAS_PREV)
  private Boolean hasPrev;

  public static final String SERIALIZED_NAME_PRE_CURSOR = "preCursor";
  @SerializedName(SERIALIZED_NAME_PRE_CURSOR)
  private String preCursor;

  public static final String SERIALIZED_NAME_NEXT_CURSOR = "nextCursor";
  @SerializedName(SERIALIZED_NAME_NEXT_CURSOR)
  private String nextCursor;


  public ListResponseEndpointOut data(List<EndpointOut> data) {
    
    this.data = data;
    return this;
  }

  public ListResponseEndpointOut addDataItem(EndpointOut dataItem) {
    this.data.add(dataItem);
    return this;
  }

   /**
   * Get data
   * @return data
  **/
  @ApiModelProperty(required = true, value = "")

  public List<EndpointOut> getData() {
    return data;
  }


  public void setData(List<EndpointOut> data) {
    this.data = data;
  }


  public ListResponseEndpointOut total(Integer total) {
    
    this.total = total;
    return this;
  }

   /**
   * Get total
   * @return total
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getTotal() {
    return total;
  }


  public void setTotal(Integer total) {
    this.total = total;
  }


  public ListResponseEndpointOut hasNext(Boolean hasNext) {
    
    this.hasNext = hasNext;
    return this;
  }

   /**
   * Get hasNext
   * @return hasNext
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getHasNext() {
    return hasNext;
  }


  public void setHasNext(Boolean hasNext) {
    this.hasNext = hasNext;
  }


  public ListResponseEndpointOut hasPrev(Boolean hasPrev) {
    
    this.hasPrev = hasPrev;
    return this;
  }

   /**
   * Get hasPrev
   * @return hasPrev
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Boolean getHasPrev() {
    return hasPrev;
  }


  public void setHasPrev(Boolean hasPrev) {
    this.hasPrev = hasPrev;
  }


  public ListResponseEndpointOut preCursor(String preCursor) {
    
    this.preCursor = preCursor;
    return this;
  }

   /**
   * Get preCursor
   * @return preCursor
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getPreCursor() {
    return preCursor;
  }


  public void setPreCursor(String preCursor) {
    this.preCursor = preCursor;
  }


  public ListResponseEndpointOut nextCursor(String nextCursor) {
    
    this.nextCursor = nextCursor;
    return this;
  }

   /**
   * Get nextCursor
   * @return nextCursor
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getNextCursor() {
    return nextCursor;
  }


  public void setNextCursor(String nextCursor) {
    this.nextCursor = nextCursor;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ListResponseEndpointOut listResponseEndpointOut = (ListResponseEndpointOut) o;
    return Objects.equals(this.data, listResponseEndpointOut.data) &&
        Objects.equals(this.total, listResponseEndpointOut.total) &&
        Objects.equals(this.hasNext, listResponseEndpointOut.hasNext) &&
        Objects.equals(this.hasPrev, listResponseEndpointOut.hasPrev) &&
        Objects.equals(this.preCursor, listResponseEndpointOut.preCursor) &&
        Objects.equals(this.nextCursor, listResponseEndpointOut.nextCursor);
  }

  @Override
  public int hashCode() {
    return Objects.hash(data, total, hasNext, hasPrev, preCursor, nextCursor);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ListResponseEndpointOut {\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
    sb.append("    hasNext: ").append(toIndentedString(hasNext)).append("\n");
    sb.append("    hasPrev: ").append(toIndentedString(hasPrev)).append("\n");
    sb.append("    preCursor: ").append(toIndentedString(preCursor)).append("\n");
    sb.append("    nextCursor: ").append(toIndentedString(nextCursor)).append("\n");
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

