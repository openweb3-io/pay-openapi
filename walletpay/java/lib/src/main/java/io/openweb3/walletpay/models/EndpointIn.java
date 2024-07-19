/*
 * Wallet-Pay API Documentations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package io.openweb3.walletpay.models;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * EndpointIn
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-07-19T12:47:46.628821+08:00[Asia/Shanghai]")
public class EndpointIn {
  public static final String SERIALIZED_NAME_FILTER_TYPES = "filter_types";
  @SerializedName(SERIALIZED_NAME_FILTER_TYPES)
  private List<String> filterTypes = new ArrayList<>();

  public static final String SERIALIZED_NAME_URL = "url";
  @SerializedName(SERIALIZED_NAME_URL)
  private String url;

  public static final String SERIALIZED_NAME_DISABLED = "disabled";
  @SerializedName(SERIALIZED_NAME_DISABLED)
  private Boolean disabled;

  public static final String SERIALIZED_NAME_METADATA = "metadata";
  @SerializedName(SERIALIZED_NAME_METADATA)
  private Map<String, String> metadata = null;

  public static final String SERIALIZED_NAME_HEADERS = "headers";
  @SerializedName(SERIALIZED_NAME_HEADERS)
  private Map<String, String> headers = null;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;


  public EndpointIn filterTypes(List<String> filterTypes) {
    
    this.filterTypes = filterTypes;
    return this;
  }

  public EndpointIn addFilterTypesItem(String filterTypesItem) {
    this.filterTypes.add(filterTypesItem);
    return this;
  }

   /**
   * The webhook endpoint expected event types
   * @return filterTypes
  **/
  @ApiModelProperty(example = "[\"tx.created\"]", required = true, value = "The webhook endpoint expected event types")

  public List<String> getFilterTypes() {
    return filterTypes;
  }


  public void setFilterTypes(List<String> filterTypes) {
    this.filterTypes = filterTypes;
  }


  public EndpointIn url(String url) {
    
    this.url = url;
    return this;
  }

   /**
   * The webhook endpoint url
   * @return url
  **/
  @ApiModelProperty(example = "http://example.com/endpoint", required = true, value = "The webhook endpoint url")

  public String getUrl() {
    return url;
  }


  public void setUrl(String url) {
    this.url = url;
  }


  public EndpointIn disabled(Boolean disabled) {
    
    this.disabled = disabled;
    return this;
  }

   /**
   * indicate whether to disable the webhook endpoint
   * @return disabled
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "false", value = "indicate whether to disable the webhook endpoint")

  public Boolean getDisabled() {
    return disabled;
  }


  public void setDisabled(Boolean disabled) {
    this.disabled = disabled;
  }


  public EndpointIn metadata(Map<String, String> metadata) {
    
    this.metadata = metadata;
    return this;
  }

  public EndpointIn putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Optional metadata
   * @return metadata
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"node\":\"http://dashboard.com/node1\",\"tag\":\"node\"}", value = "Optional metadata")

  public Map<String, String> getMetadata() {
    return metadata;
  }


  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }


  public EndpointIn headers(Map<String, String> headers) {
    
    this.headers = headers;
    return this;
  }

  public EndpointIn putHeadersItem(String key, String headersItem) {
    if (this.headers == null) {
      this.headers = new HashMap<>();
    }
    this.headers.put(key, headersItem);
    return this;
  }

   /**
   * Optional headers
   * @return headers
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"x-user-id\":\"user1\",\"x-org-id\":\"org_xdwfeees1xfeg\"}", value = "Optional headers")

  public Map<String, String> getHeaders() {
    return headers;
  }


  public void setHeaders(Map<String, String> headers) {
    this.headers = headers;
  }


  public EndpointIn description(String description) {
    
    this.description = description;
    return this;
  }

   /**
   * The endpoint&#39;s description
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "The description for endpoint", value = "The endpoint's description")

  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EndpointIn endpointIn = (EndpointIn) o;
    return Objects.equals(this.filterTypes, endpointIn.filterTypes) &&
        Objects.equals(this.url, endpointIn.url) &&
        Objects.equals(this.disabled, endpointIn.disabled) &&
        Objects.equals(this.metadata, endpointIn.metadata) &&
        Objects.equals(this.headers, endpointIn.headers) &&
        Objects.equals(this.description, endpointIn.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(filterTypes, url, disabled, metadata, headers, description);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EndpointIn {\n");
    sb.append("    filterTypes: ").append(toIndentedString(filterTypes)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
    sb.append("    disabled: ").append(toIndentedString(disabled)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    headers: ").append(toIndentedString(headers)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
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

