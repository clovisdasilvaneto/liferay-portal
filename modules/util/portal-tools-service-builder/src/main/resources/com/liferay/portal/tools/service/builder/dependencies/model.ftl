package ${apiPackagePath}.model;

<#if entity.hasCompoundPK()>
	import ${apiPackagePath}.service.persistence.${entity.name}PK;
</#if>

import aQute.bnd.annotation.ProviderType;

import com.liferay.expando.kernel.model.ExpandoBridge;
import com.liferay.expando.kernel.util.ExpandoBridgeFactoryUtil;
import com.liferay.portal.kernel.bean.AutoEscape;
import com.liferay.portal.kernel.exception.LocaleException;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.model.AttachedModel;
import com.liferay.portal.kernel.model.AuditedModel;
import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.ContainerModel;
import com.liferay.portal.kernel.model.GroupedModel;
import com.liferay.portal.kernel.model.LocalizedModel;
import com.liferay.portal.kernel.model.MVCCModel;
import com.liferay.portal.kernel.model.ResourcedModel;
import com.liferay.portal.kernel.model.ShardedModel;
import com.liferay.portal.kernel.model.StagedAuditedModel;
import com.liferay.portal.kernel.model.StagedGroupedModel;
import com.liferay.portal.kernel.model.StagedModel;
import com.liferay.portal.kernel.model.TrashedModel;
import com.liferay.portal.kernel.model.TypedModel;
import com.liferay.portal.kernel.model.WorkflowedModel;
import com.liferay.portal.kernel.model.version.VersionModel;
import com.liferay.portal.kernel.model.version.VersionedModel;
import com.liferay.portal.kernel.service.ServiceContext;

import java.io.Serializable;

import java.math.BigDecimal;

import java.sql.Blob;

import java.util.Date;
import java.util.Locale;
import java.util.Map;

/**
 * The base model interface for the ${entity.name} service. Represents a row in the &quot;${entity.table}&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link ${packagePath}.model.impl.${entity.name}ModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link ${packagePath}.model.impl.${entity.name}Impl}.
 * </p>
 *
 * @author ${author}
 * @see ${entity.name}
 * @see ${packagePath}.model.impl.${entity.name}Impl
 * @see ${packagePath}.model.impl.${entity.name}ModelImpl
<#if classDeprecated>
 * @deprecated ${classDeprecatedComment}
</#if>
 * @generated
 */

<#if classDeprecated>
	@Deprecated
</#if>

@ProviderType
public interface ${entity.name}Model extends ${entity.getModelBaseInterfaceNames()} {
	<#assign overrideColumnNames = entity.getOverrideColumnNames() />

	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a ${entity.humanName} model instance should use the {@link ${entity.name}} interface instead.
	 */

	/**
	 * Returns the primary key of this ${entity.humanName}.
	 *
	 * @return the primary key of this ${entity.humanName}
	 */

	<#if overrideColumnNames?seq_contains("primaryKey")>
		@Override
	</#if>

	public ${entity.PKClassName} getPrimaryKey();

	/**
	 * Sets the primary key of this ${entity.humanName}.
	 *
	 * @param primaryKey the primary key of this ${entity.humanName}
	 */

	<#if overrideColumnNames?seq_contains("primaryKey")>
		@Override
	</#if>

	public void setPrimaryKey(${entity.PKClassName} primaryKey);

	<#list entity.regularEntityColumns as entityColumn>
		<#if stringUtil.equals(entityColumn.name, "classNameId")>
			/**
			 * Returns the fully qualified class name of this ${entity.humanName}.
			 *
			 * @return the fully qualified class name of this ${entity.humanName}
			 */

			<#if overrideColumnNames?seq_contains(entityColumn.name)>
				@Override
			</#if>

			public String getClassName();

			public void setClassName(String className);
		</#if>

		<#assign
			autoEscape = true

			modelName = apiPackagePath + ".model." + entity.name
		/>

		<#if modelHintsUtil.getHints(modelName, entityColumn.name)??>
			<#assign hints = modelHintsUtil.getHints(modelName, entityColumn.name) />

			<#if hints["auto-escape"]??>
				<#assign autoEscapeHintValue = hints["auto-escape"] />

				<#if stringUtil.equals(autoEscapeHintValue, "false")>
					<#assign autoEscape = false />
				</#if>
			</#if>
		</#if>

		/**
		 * Returns the ${entityColumn.humanName} of this ${entity.humanName}.
		 *
		 * @return the ${entityColumn.humanName} of this ${entity.humanName}
		 */

		<#if autoEscape && stringUtil.equals(entityColumn.type, "String") && (entityColumn.localized == false)>
			@AutoEscape
		</#if>

		<#if overrideColumnNames?seq_contains(entityColumn.name)>
			@Override
		</#if>

		public ${entityColumn.genericizedType} get${entityColumn.methodName}();

		<#if entityColumn.localized>
			/**
			 * Returns the localized ${entityColumn.humanName} of this ${entity.humanName} in the language. Uses the default language if no localization exists for the requested language.
			 *
			 * @param locale the locale of the language
			 * @return the localized ${entityColumn.humanName} of this ${entity.humanName}
			 */
			@AutoEscape
			public String get${entityColumn.methodName}(Locale locale);

			/**
			 * Returns the localized ${entityColumn.humanName} of this ${entity.humanName} in the language, optionally using the default language if no localization exists for the requested language.
			 *
			 * @param locale the local of the language
			 * @param useDefault whether to use the default language if no localization exists for the requested language
			 * @return the localized ${entityColumn.humanName} of this ${entity.humanName}. If <code>useDefault</code> is <code>false</code> and no localization exists for the requested language, an empty string will be returned.
			 */
			@AutoEscape
			public String get${entityColumn.methodName}(Locale locale, boolean useDefault);

			/**
			 * Returns the localized ${entityColumn.humanName} of this ${entity.humanName} in the language. Uses the default language if no localization exists for the requested language.
			 *
			 * @param languageId the ID of the language
			 * @return the localized ${entityColumn.humanName} of this ${entity.humanName}
			 */
			@AutoEscape
			public String get${entityColumn.methodName}(String languageId);

			/**
			 * Returns the localized ${entityColumn.humanName} of this ${entity.humanName} in the language, optionally using the default language if no localization exists for the requested language.
			 *
			 * @param languageId the ID of the language
			 * @param useDefault whether to use the default language if no localization exists for the requested language
			 * @return the localized ${entityColumn.humanName} of this ${entity.humanName}
			 */
			@AutoEscape
			public String get${entityColumn.methodName}(String languageId, boolean useDefault);

			@AutoEscape
			public String get${entityColumn.methodName}CurrentLanguageId();

			@AutoEscape
			public String get${entityColumn.methodName}CurrentValue();

			/**
			 * Returns a map of the locales and localized ${entityColumn.humanNames} of this ${entity.humanName}.
			 *
			 * @return the locales and localized ${entityColumn.humanNames} of this ${entity.humanName}
			 */
			public Map<Locale, String> get${entityColumn.methodName}Map();
		</#if>

		<#if stringUtil.equals(entityColumn.type, "boolean")>
			/**
			 * Returns <code>true</code> if this ${entity.humanName} is ${entityColumn.humanName}.
			 *
			 * @return <code>true</code> if this ${entity.humanName} is ${entityColumn.humanName}; <code>false</code> otherwise
			 */
			public boolean is${entityColumn.methodName}();
		</#if>

		/**
		<#if stringUtil.equals(entityColumn.type, "boolean")>
		 * Sets whether this ${entity.humanName} is ${entityColumn.humanName}.
		<#else>
		 * Sets the ${entityColumn.humanName} of this ${entity.humanName}.
		</#if>
		 *
		 * @param ${entityColumn.name} the ${entityColumn.humanName} of this ${entity.humanName}
		 */
		<#if overrideColumnNames?seq_contains(entityColumn.name)>
			@Override
		</#if>
		public void set${entityColumn.methodName}(${entityColumn.genericizedType} ${entityColumn.name});

		<#if entityColumn.localized>
			/**
			 * Sets the localized ${entityColumn.humanName} of this ${entity.humanName} in the language.
			 *
			 * @param ${entityColumn.name} the localized ${entityColumn.humanName} of this ${entity.humanName}
			 * @param locale the locale of the language
			 */
			public void set${entityColumn.methodName}(String ${entityColumn.name}, Locale locale);

			/**
			 * Sets the localized ${entityColumn.humanName} of this ${entity.humanName} in the language, and sets the default locale.
			 *
			 * @param ${entityColumn.name} the localized ${entityColumn.humanName} of this ${entity.humanName}
			 * @param locale the locale of the language
			 * @param defaultLocale the default locale
			 */
			public void set${entityColumn.methodName}(String ${entityColumn.name}, Locale locale, Locale defaultLocale);

			public void set${entityColumn.methodName}CurrentLanguageId(String languageId);

			/**
			 * Sets the localized ${entityColumn.humanNames} of this ${entity.humanName} from the map of locales and localized ${entityColumn.humanNames}.
			 *
			 * @param ${entityColumn.name}Map the locales and localized ${entityColumn.humanNames} of this ${entity.humanName}
			 */
			public void set${entityColumn.methodName}Map(Map<Locale, String> ${entityColumn.name}Map);

			/**
			 * Sets the localized ${entityColumn.humanNames} of this ${entity.humanName} from the map of locales and localized ${entityColumn.humanNames}, and sets the default locale.
			 *
			 * @param ${entityColumn.name}Map the locales and localized ${entityColumn.humanNames} of this ${entity.humanName}
			 * @param defaultLocale the default locale
			 */
			public void set${entityColumn.methodName}Map(Map<Locale, String> ${entityColumn.name}Map, Locale defaultLocale);
		</#if>

		<#if stringUtil.equals(entityColumn.name, "resourcePrimKey") && entity.isResourcedModel()>
			@Override
			public boolean isResourceMain();
		</#if>

		<#if entityColumn.userUuid>
			/**
			 * Returns the ${entityColumn.userUuidHumanName} of this ${entity.humanName}.
			 *
			 * @return the ${entityColumn.userUuidHumanName} of this ${entity.humanName}
			 */

			<#if overrideColumnNames?seq_contains(entityColumn.userUuidName)>
				@Override
			</#if>

			public String get${entityColumn.methodUserUuidName}();

			/**
			 * Sets the ${entityColumn.userUuidHumanName} of this ${entity.humanName}.
			 *
			 * @param ${entityColumn.userUuidName} the ${entityColumn.userUuidHumanName} of this ${entity.humanName}
			 */

			<#if overrideColumnNames?seq_contains(entityColumn.userUuidName)>
				@Override
			</#if>

			public void set${entityColumn.methodUserUuidName}(String ${entityColumn.userUuidName});
		</#if>
	</#list>

	<#if entity.localizedEntity??>
		public String[] getAvailableLanguageIds();

		<#list entity.localizedEntityColumns as entityColumn>
			public String get${entityColumn.methodName}();

			public String get${entityColumn.methodName}(String languageId);

			public String get${entityColumn.methodName}(String languageId, boolean useDefault);

			public String get${entityColumn.methodName}MapAsXML();

			public Map<String, String> getLanguageIdTo${entityColumn.methodName}Map();
		</#list>
	</#if>

	<#if entity.isTrashEnabled()>
		<#if !entity.isWorkflowEnabled()>
			/**
			 * Returns the status of this ${entity.humanName}.
			 *
			 * @return the status of this ${entity.humanName}
			 */
			@Override
			public int getStatus();
		</#if>

		/**
		 * Returns the trash entry created when this ${entity.humanName} was moved to the Recycle Bin. The trash entry may belong to one of the ancestors of this ${entity.humanName}.
		 *
		 * @return the trash entry created when this ${entity.humanName} was moved to the Recycle Bin
		 */
		@Override
		public com.liferay.trash.kernel.model.TrashEntry getTrashEntry() throws PortalException;

		/**
		 * Returns the class primary key of the trash entry for this ${entity.humanName}.
		 *
		 * @return the class primary key of the trash entry for this ${entity.humanName}
		 */
		@Override
		public long getTrashEntryClassPK();

		/**
		 * Returns the trash handler for this ${entity.humanName}.
		 *
		 * @return the trash handler for this ${entity.humanName}
		 * @deprecated As of Judson (7.1.x), with no direct replacement
		 */
		@Deprecated
		@Override
		public com.liferay.portal.kernel.trash.TrashHandler getTrashHandler();

		/**
		 * Returns <code>true</code> if this ${entity.humanName} is in the Recycle Bin.
		 *
		 * @return <code>true</code> if this ${entity.humanName} is in the Recycle Bin; <code>false</code> otherwise
		 */
		@Override
		public boolean isInTrash();

		/**
		 * Returns <code>true</code> if the parent of this ${entity.humanName} is in the Recycle Bin.
		 *
		 * @return <code>true</code> if the parent of this ${entity.humanName} is in the Recycle Bin; <code>false</code> otherwise
		 */
		@Override
		public boolean isInTrashContainer();

		@Override
		public boolean isInTrashExplicitly();

		@Override
		public boolean isInTrashImplicitly();
	</#if>

	<#if entity.isWorkflowEnabled()>
		/**
		 * Returns <code>true</code> if this ${entity.humanName} is approved.
		 *
		 * @return <code>true</code> if this ${entity.humanName} is approved; <code>false</code> otherwise
		 */
		@Override
		public boolean isApproved();

		/**
		 * Returns <code>true</code> if this ${entity.humanName} is denied.
		 *
		 * @return <code>true</code> if this ${entity.humanName} is denied; <code>false</code> otherwise
		 */
		@Override
		public boolean isDenied();

		/**
		 * Returns <code>true</code> if this ${entity.humanName} is a draft.
		 *
		 * @return <code>true</code> if this ${entity.humanName} is a draft; <code>false</code> otherwise
		 */
		@Override
		public boolean isDraft();

		/**
		 * Returns <code>true</code> if this ${entity.humanName} is expired.
		 *
		 * @return <code>true</code> if this ${entity.humanName} is expired; <code>false</code> otherwise
		 */
		@Override
		public boolean isExpired();

		/**
		 * Returns <code>true</code> if this ${entity.humanName} is inactive.
		 *
		 * @return <code>true</code> if this ${entity.humanName} is inactive; <code>false</code> otherwise
		 */
		@Override
		public boolean isInactive();

		/**
		 * Returns <code>true</code> if this ${entity.humanName} is incomplete.
		 *
		 * @return <code>true</code> if this ${entity.humanName} is incomplete; <code>false</code> otherwise
		 */
		@Override
		public boolean isIncomplete();

		/**
		 * Returns <code>true</code> if this ${entity.humanName} is pending.
		 *
		 * @return <code>true</code> if this ${entity.humanName} is pending; <code>false</code> otherwise
		 */
		@Override
		public boolean isPending();

		/**
		 * Returns <code>true</code> if this ${entity.humanName} is scheduled.
		 *
		 * @return <code>true</code> if this ${entity.humanName} is scheduled; <code>false</code> otherwise
		 */
		@Override
		public boolean isScheduled();
	</#if>

	<#if entity.isContainerModel()>
		<#if !entity.hasEntityColumn("containerModelId")>
			/**
			 * Returns the container model ID of this ${entity.humanName}.
			 *
			 * @return the container model ID of this ${entity.humanName}
			 */
			@Override
			public long getContainerModelId();

			/**
			 * Sets the container model ID of this ${entity.humanName}.
			 *
			 * @param containerModelId the container model ID of this ${entity.humanName}
			 */
			@Override
			public void setContainerModelId(long containerModelId);
		</#if>

		/**
		 * Returns the container name of this ${entity.humanName}.
		 *
		 * @return the container name of this ${entity.humanName}
		 */
		@Override
		public String getContainerModelName();

		<#if !entity.hasEntityColumn("parentContainerModelId")>
			/**
			 * Returns the parent container model ID of this ${entity.humanName}.
			 *
			 * @return the parent container model ID of this ${entity.humanName}
			 */
			@Override
			public long getParentContainerModelId();

			/**
			 * Sets the parent container model ID of this ${entity.humanName}.
			 *
			 * @param parentContainerModelId the parent container model ID of this ${entity.humanName}
			 */
			@Override
			public void setParentContainerModelId(long parentContainerModelId);
		</#if>
	</#if>

	<#if serviceBuilder.isVersionLTE_7_1_0()>

		<#--
		Copy methods from com.liferay.portal.kernel.model.BaseModel and java.lang.Object to
		correctly generate wrappers.
		-->

		@Override
		public boolean isNew();

		@Override
		public void setNew(boolean n);

		@Override
		public boolean isCachedModel();

		@Override
		public void setCachedModel(boolean cachedModel);

		@Override
		public boolean isEscapedModel();

		@Override
		public Serializable getPrimaryKeyObj();

		@Override
		public void setPrimaryKeyObj(Serializable primaryKeyObj);

		@Override
		public ExpandoBridge getExpandoBridge();

		@Override
		public void setExpandoBridgeAttributes(BaseModel<?> baseModel);

		@Override
		public void setExpandoBridgeAttributes(ExpandoBridge expandoBridge);

		@Override
		public void setExpandoBridgeAttributes(ServiceContext serviceContext);
	</#if>

	<#if entity.isLocalizedModel()>
		@Override
		public String[] getAvailableLanguageIds();

		@Override
		public String getDefaultLanguageId();

		@Override
		public void prepareLocalizedFieldsForImport() throws LocaleException;

		@Override
		public void prepareLocalizedFieldsForImport(Locale defaultImportLocale) throws LocaleException;
	</#if>

	<#if serviceBuilder.isVersionLTE_7_1_0()>
		@Override
		public Object clone();

		@Override
		public int compareTo(${apiPackagePath}.model.${entity.name} ${entity.varName});

		@Override
		public int hashCode();

		@Override
		public CacheModel<${apiPackagePath}.model.${entity.name}> toCacheModel();

		@Override
		public ${apiPackagePath}.model.${entity.name} toEscapedModel();

		@Override
		public ${apiPackagePath}.model.${entity.name} toUnescapedModel();

		@Override
		public String toString();

		@Override
		public String toXmlString();
	</#if>

}