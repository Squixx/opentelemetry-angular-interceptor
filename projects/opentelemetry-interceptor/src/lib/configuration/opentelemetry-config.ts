import { InjectionToken } from '@angular/core';

export enum Collector {
  jaeger = 'jaeger',
  zipkin = 'zipkin',
  otelcol = 'otelcol',
}

export enum Propagator {
  b3 = 'B3Propagator',
  httpTrace = 'HttpTraceContext',
}

/**
 * Common configuration
 */
export interface CommonCollectorConfig {
  /** serviceName : Name of service in trace */
  serviceName: string;
  /** console : boolean to trace in console */
  console?: boolean;
  /** production : boolean to use a BatchSpanExporter(async) or SimpleSpanExporter(sync) */
  production?: boolean;
  /** collector */
  collector: Collector;
  /** propagator */
  propagator: Propagator;
}

/**
 * OpenTelemetry Collector configuration
 */
export interface OtelCollectorConfig {
  /**
   * An url (Default value: http://localhost:9090/v1/trace)
   */
  url?: string;
}

/**
 * Jaeger Collector configuration
 */
export interface JaegerCollectorConfig {
  /** host */
  host?: string;
  /** port */
  port?: number;
}

/**
 * Configuration for Zipkin
 */
export interface ZipkinCollectorConfig {
  /**
   * An url (Default value: http://localhost:9411/api/v2/spans)
   */
  url?: string;
}
/**
 * OpenTelemetryConfig
 */
export interface OpenTelemetryConfig {
  /** commonConfig */
  commonConfig: CommonCollectorConfig;
  /** jaegerConfig */
  jaegerConfig?: JaegerCollectorConfig;
  /** zipkinConfig */
  zipkinConfig?: ZipkinCollectorConfig;
  /** otelcolConfig */
  otelcolConfig?: OtelCollectorConfig;
}

/** OpenTelemetryInjectConfig : Config injection */
export const OpenTelemetryInjectConfig = new InjectionToken<
  OpenTelemetryConfig
>('opentelemetry.config');
